import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "saltsurf-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    @Input() variant: "light" | "dark" = "dark";

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
        window.scrollTo(0, 0);
    }
}
