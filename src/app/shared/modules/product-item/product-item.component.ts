import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../types/product.type";

@Component({
    selector: "saltsurf-product-item",
    templateUrl: "./product-item.component.html",
    styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
    @Input() item?: Product;

    constructor() {}

    ngOnInit() {}
}
