import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "saltsurf-startpage",
    templateUrl: "./startpage.component.html",
    styleUrls: ["./startpage.component.scss"]
})
export class StartpageComponent implements OnInit {
    public categoryItems = [
        {
            name: "Surfboards",
            image: "../../../assets/images/surfboard-cat.png",
            link: "boards"
        },
        {
            name: "Surf Equipment",
            image: "../../../assets/images/equipment-cat.png",
            link: "equipment"
        },
        {
            name: "Surfwear Women",
            image: "../../../../assets/images/women-cat.png",
            link: "surfwear"
        },
        {
            name: "Surfwear Men",
            image: "../../../assets/images/men-cat.png",
            link: "surfwear"
        }
    ];
    constructor(private router: Router) {}

    ngOnInit() {}

    getUrl() {
        return "url('../../../../../assets/images/salt-surf-header.png')";
    }

    public navigateToOverview(link: string): void {
        this.router.navigate([link]);
        window.scrollTo(0, 0);
    }
}
