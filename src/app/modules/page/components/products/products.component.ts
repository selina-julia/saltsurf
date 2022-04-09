import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/shared/services/product.service";
import { Product } from "src/app/shared/types/product.type";

@Component({
    selector: "saltsurf-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
    public products?: Product[];

    constructor(
        private productService: ProductService,
        private router: Router
    ) {}

    public shopItem = [
        { name: "Surfboards" },
        { name: "Surf Equipment" },
        { name: "Surfwear Women" },
        { name: "Surfwear Men" }
    ];

    ngOnInit(): void {
        this.initProducts();
    }

    public initProducts(): void {
        this.productService.getProducts().subscribe((products) => {
            this.products = products;
        });
    }

    public getUrl(): string {
        return "url('../../../../../assets/images/sub-header.jpg')";
    }

    public navigateToItem(id: string | undefined): void {
        this.router.navigate(["/product", id]);
        window.scrollTo(0, 0);
    }
}
