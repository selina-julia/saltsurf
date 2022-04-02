import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
    @Input() type: "blue" | "light" | "textlink" = "blue";

    constructor() {}

    ngOnInit() {}

    public getClassesByType(): string {
        return "px-5 py-2 rounded-md bg-surf-blue text-slate-50";
    }
}
