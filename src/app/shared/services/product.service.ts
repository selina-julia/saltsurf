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

    public getProductsById(id: string): Observable<any> {
        return this.firestore.collection("products").doc(id).valueChanges();
    }
}
