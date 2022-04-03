import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "saltsurf-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
    public formGroup!: FormGroup;

    constructor(private router: Router) {}

    ngOnInit() {
        this.initForm();
    }

    getUrl() {
        return "url('../../../../../assets/images/login-img.png')";
    }

    public navigateToLogin(): void {
        this.router.navigate(["/login"]);
    }

    private initForm(): void {
        this.formGroup = new FormGroup({
            firstName: new FormControl("", Validators.required),
            lastName: new FormControl("", Validators.required),
            email: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required)
        });
    }
}
