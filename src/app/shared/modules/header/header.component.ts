import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    public navItems = [
        { title: "Home", slug: "/" },
        { title: "Surfboards", slug: "/boards" },
        { title: "Equipment", slug: "/equipment" },
        { title: "Surfwear", slug: "/surfwear" }
    ];
    constructor(public router: Router) {}

    ngOnInit() {}

    public navigateToUrl(slug: string): void {
        this.router.navigate([slug]);
    }
}
