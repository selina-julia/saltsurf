import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
    constructor() {}

    public shopItem = [
        { name: "Surfboards" },
        { name: "Surf Equipment" },
        { name: "Surfwear Women" },
        { name: "Surfwear Men" }
    ];

    ngOnInit() {}

    getUrl() {
        return "url('../../../../../assets/images/sub-header.jpg')";
    }
}
