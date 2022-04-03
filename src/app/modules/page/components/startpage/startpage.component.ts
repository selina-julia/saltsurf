import { Component, OnInit } from "@angular/core";

@Component({
    selector: "saltsurf-startpage",
    templateUrl: "./startpage.component.html",
    styleUrls: ["./startpage.component.scss"]
})
export class StartpageComponent implements OnInit {
    public categoryItems = [
        {
            name: "Surfboards",
            image: "../../../assets/images/surfboard-cat.png"
        },
        {
            name: "Surf Equipment",
            image: "../../../assets/images/equipment-cat.png"
        },
        {
            name: "Surfwear Women",
            image: "../../../../assets/images/women-cat.png"
        },
        {
            name: "Surfwear Men",
            image: "../../../assets/images/men-cat.png"
        }
    ];
    constructor() {}

    ngOnInit() {}

    getUrl() {
        return "url('../../../../../assets/images/salt-surf-header.png')";
    }
}
