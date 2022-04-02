import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-category-item",
    templateUrl: "./category-item.component.html",
    styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
    @Input() item: any;

    constructor() {}

    ngOnInit() {}
}
