import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
    selector: "saltsurf-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
    public formGroup!: FormGroup;

    constructor(
        private router: Router,
        private cdRef: ChangeDetectorRef,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.initForm();
        this.listenToFormChanges();
    }

    getUrl() {
        return "url('../../../../../assets/images/login-img.png')";
    }

    public navigateToLogin(): void {
        this.router.navigate(["/login"]);
    }

    public onSignUp(): void {
        this.authService.signUp(this.formGroup.value);
    }

    private initForm(): void {
        this.formGroup = new FormGroup({
            firstName: new FormControl("", Validators.required),
            lastName: new FormControl("", Validators.required),
            email: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required)
        });
    }

    public listenToFormChanges(): void {
        console.log(this.formGroup);
        this.formGroup.valueChanges.subscribe((value) => {
            console.log(value);
            this.cdRef.detectChanges();
        });
    }
}
