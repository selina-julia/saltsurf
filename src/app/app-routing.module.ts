import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./modules/page/components/register/register.component";
import { ProductsComponent } from "./modules/page/components/products/products.component";
import { StartpageComponent } from "./modules/page/components/startpage/startpage.component";
import { LoginComponent } from "./modules/page/components/login/login.component";

const routes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    { path: "", component: StartpageComponent },
    { path: "boards", component: ProductsComponent },
    { path: "surfwear", component: ProductsComponent },
    { path: "equipment", component: ProductsComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
