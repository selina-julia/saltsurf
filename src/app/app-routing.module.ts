import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartpageComponent } from "./modules/page/components/startpage/startpage.component";

const routes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    { path: "", component: StartpageComponent },
    { path: "boards", component: StartpageComponent },
    { path: "surfwear", component: StartpageComponent },
    { path: "equipment", component: StartpageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
