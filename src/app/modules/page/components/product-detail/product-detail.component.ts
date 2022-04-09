import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/shared/services/product.service";
import { Product } from "src/app/shared/types/product.type";

@Component({
    selector: "saltsurf-product-detail",
    templateUrl: "./product-detail.component.html",
    styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
    public product?: Product;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}

    ngOnInit() {
        this.getProductById();
    }

    private getProductById() {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = routeParams.get("productId");

        this.productService.getProducts().subscribe((items) => {
            this.product = items.find((item) => {
                return item.uid === productIdFromRoute;
            });
            console.log(this.product);
        });
    }

    // private getById() {
    //     const routeParams = this.route.snapshot.paramMap;
    //     const productIdFromRoute = routeParams.get("productId");

    //     if (productIdFromRoute) {
    //         this.productService
    //             .getProductsById(productIdFromRoute)
    //             .subscribe((item) => {
    //                 console.log(item);
    //             });
    //     }
    // }
}
