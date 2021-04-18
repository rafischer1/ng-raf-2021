import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TranslocoRootModule } from "./transloco/transloco-root.module";
import { ChecklistContainerComponent } from "./shared/checklist-container/checklist-container.component";
import { ToastsContainerComponent } from "./shared/toasts-container/toasts-container.component";
import { ChecklistComponent } from "./shared/checklist-container/checklist/checklist.component";
import { MainComponent } from "./components/main/main.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MatIconModule } from "@angular/material/icon";
import { MatOptionModule } from "@angular/material/core";
import { ToastsWebComponent } from "./components/features/toasts-web/toasts-web.component";

@NgModule({
  declarations: [
    AppComponent,
    ChecklistContainerComponent,
    ToastsContainerComponent,
    ChecklistComponent,
    MainComponent,
    NavBarComponent,
    ToastsWebComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
