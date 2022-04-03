import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageModule } from "./modules/page/page.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FooterModule } from "./shared/modules/footer/footer.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PageModule,
        NoopAnimationsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        FooterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
