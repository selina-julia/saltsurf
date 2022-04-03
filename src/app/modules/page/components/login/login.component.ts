import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    public formGroup!: FormGroup;

    constructor(private router: Router) {}

    ngOnInit() {
        this.initForm();
    }

    private initForm(): void {
        this.formGroup = new FormGroup({
            email: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required)
        });
    }

    public navigateToLogin(): void {
        this.router.navigate(["/register"]);
    }
}
