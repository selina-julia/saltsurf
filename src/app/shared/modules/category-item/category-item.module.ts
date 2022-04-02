import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryItemComponent } from "./category-item.component";

@NgModule({
    imports: [CommonModule],
    declarations: [CategoryItemComponent],
    exports: [CategoryItemComponent]
})
export class CategoryItemModule {}
