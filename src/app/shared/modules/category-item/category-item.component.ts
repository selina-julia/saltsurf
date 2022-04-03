import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "saltsurf-category-item",
    templateUrl: "./category-item.component.html",
    styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
    @Input() item: any;

    constructor() {}

    ngOnInit() {
        console.log(this.item);
    }

    public getUrl() {
        return this.item.image;
    }
}
