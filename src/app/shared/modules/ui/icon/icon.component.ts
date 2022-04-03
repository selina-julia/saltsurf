import { Component, Input, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: "saltsurf-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.scss"]
})
export class IconComponent implements OnInit {
    @Input() iconName!: string;

    private icons = ["cart", "arrow", "heart"];

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.icons.map((iconName) => {
            console.log(iconName);
            this.matIconRegistry.addSvgIcon(
                iconName,
                this.domSanitizer.bypassSecurityTrustResourceUrl(
                    `../../../../../assets/icons/${iconName}.svg`
                )
            );
        });
    }

    ngOnInit() {
        this.initRegistry();
    }

    public initRegistry(): void {}
}
