import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Product } from "../types/product.type";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    public products$ = new BehaviorSubject<Product[] | undefined>(undefined);

    constructor(private firestore: AngularFirestore) {}

    public getProducts(): Observable<Product[]> {
        return this.firestore
            .collection("products")
            .snapshotChanges()
            .pipe(
                map((actions) => {
                    return actions.map((a) => {
                        const data = a.payload.doc.data() as Product;
                        const uid = a.payload.doc.id;
                        return { uid, ...data };
                    });
                })
            );
    }

    // getRecipes(): Observable<Recipe[]> {
    //   return this.firestore
    //     .collection('recipes')
    //     .snapshotChanges()
    //     .pipe(
    //       map((actions) => {
    //         return actions.map((a) => {
    //           const data = a.payload.doc.data() as Recipe;
    //           const uid = a.payload.doc.id;
    //           return { uid, ...data };
    //         });
    //       })
    //     );
    // }

    // public fetchUser(): void {
    //   this.auth.user
    //     .pipe(
    //       switchMap((authUser: firebase.User | null) =>
    //         this.angularFirestore
    //           .collection<User>('users')
    //           .doc(authUser?.uid)
    //           .valueChanges({ idField: 'uid' })
    //       )
    //     )
    //     .subscribe((user) => {
    //       this.user$.next(user);
    //     });
    // }
}
