import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { FirebaseError } from "firebase/app";
import { User } from "../types/user.type";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private readonly errors: any[] = [
        {
            code: "auth/invalid-email",
            message:
                "Der Benutzer wurde nicht gefunden. Bitte überprüfen Sie ob die E-Mail Adresse gültig ist."
        },
        {
            code: "auth/user-not-found",
            message:
                "Der Benutzer wurde nicht gefunden. Bitte überprüfen Sie ob die E-Mail Adresse gültig ist."
        },
        {
            code: "auth/wrong-password",
            message:
                'Das Passwort ist inkorrekt. Wenn Sie Ihr Passwort vergessen haben, nutzen Sie die "Passwort vergessen" Funktion.'
        }
    ];

    constructor(
        private auth: AngularFireAuth,
        private angularFirestore: AngularFirestore,
        private router: Router
    ) {}

    public async signUp(user: User) {
        console.log(user);
        return this.auth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                this.setUserData(
                    result,
                    user.firstName ?? "",
                    user.lastName ?? "",
                    user.favoriteItems ?? [],
                    user.checkOutItems ?? []
                );
                this.login(user.email, user.password);
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }

    public async setUserData(
        user: any,
        firstName: string,
        lastName: string,
        favoriteItems: string[],
        checkOutItems: string[]
    ) {
        if (!user) {
            return;
        }
        this.angularFirestore
            .collection("users")
            .doc(user.user?.uid)
            .set({
                email: user.user?.email,
                loginProvider: "Email",
                firstName: firstName,
                lastName: lastName,
                favoriteItems: favoriteItems,
                checkOutItems: checkOutItems
            })
            .then(() => {
                console.log("successful");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }

    public async login(email: string, password: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            let userCredential = undefined;
            try {
                userCredential = await this.auth.signInWithEmailAndPassword(
                    email,
                    password
                );
            } catch (e) {
                if (e instanceof FirebaseError) {
                    const message = this.getFirebaseErrorMessage(e.code);
                    console.log(email, password, "login not successful");

                    if (message) {
                        reject(message);
                    }
                    reject("Fehlercode: 743");
                }
                reject("Fehlercode: 744");
                return;
            }

            console.log(email, password, "login successful");

            resolve();
            this.router.navigate(["recipes"]);
        });
    }

    private getFirebaseErrorMessage(code: string): string | undefined {
        const foundError = this.errors.find((error) => {
            return code === error.code;
        });

        return foundError ? foundError.message : undefined;
    }
}
