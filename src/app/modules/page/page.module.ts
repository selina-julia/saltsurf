import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageComponent } from "./page.component";
import { StartpageComponent } from "./components/startpage/startpage.component";
import { HeaderModule } from "src/app/shared/modules/header/header.module";

@NgModule({
    imports: [CommonModule, HeaderModule],
    declarations: [PageComponent, StartpageComponent]
})
export class PageModule {}
