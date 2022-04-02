import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageComponent } from "./page.component";
import { StartpageComponent } from "./components/startpage/startpage.component";
import { HeaderModule } from "src/app/shared/modules/header/header.module";
import { ButtonModule } from "src/app/shared/modules/ui/button/button.module";
import { ProductsComponent } from "./components/products/products.component";
import { CategoryItemModule } from "src/app/shared/modules/category-item/category-item.module";

@NgModule({
    imports: [CommonModule, HeaderModule, ButtonModule, CategoryItemModule],
    declarations: [PageComponent, StartpageComponent, ProductsComponent]
})
export class PageModule {}
