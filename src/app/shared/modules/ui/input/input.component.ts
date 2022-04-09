import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "saltsurf-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
    @Input() type = "text";
    @Input() parentFormGroup!: FormGroup;
    @Input() parentFormControlName!: string | number | null;
    @Input() placeholder?: string;
    @Input() label?: string;
    @Input() autocomplete?: string;

    constructor() {}

    ngOnInit() {
        console.log(this.parentFormControlName, this.parentFormGroup);
    }
}
