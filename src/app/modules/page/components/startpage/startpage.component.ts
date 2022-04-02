import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-startpage",
    templateUrl: "./startpage.component.html",
    styleUrls: ["./startpage.component.scss"]
})
export class StartpageComponent implements OnInit {
    public categoryItems = [
        { name: "Surfboards" },
        { name: "Surf Equipment" },
        { name: "Surfwear Women" },
        { name: "Surfwear Men" }
    ];
    constructor() {}

    ngOnInit() {}

    getUrl() {
        return "url('../../../../../assets/images/salt-surf-header.png')";
    }
}
