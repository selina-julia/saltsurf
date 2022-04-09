import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageComponent } from "./page.component";
import { StartpageComponent } from "./components/startpage/startpage.component";
import { HeaderModule } from "src/app/shared/modules/header/header.module";
import { ButtonModule } from "src/app/shared/modules/ui/button/button.module";
import { ProductsComponent } from "./components/products/products.component";
import { CategoryItemModule } from "src/app/shared/modules/category-item/category-item.module";
import { InputModule } from "src/app/shared/modules/ui/input/input.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductItemModule } from "src/app/shared/modules/product-item/product-item.module";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        ButtonModule,
        CategoryItemModule,
        InputModule,
        ReactiveFormsModule,
        FormsModule,
        ProductItemModule,
        RouterModule
    ],
    declarations: [
        PageComponent,
        StartpageComponent,
        ProductsComponent,
        RegisterComponent,
        LoginComponent,
        ProductDetailComponent
    ]
})
export class PageModule {}
