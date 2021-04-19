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
import { ToastButtonComponent } from "./components/features/toasts-web/toast-button/toast-button.component";
import { ToastsModalComponent } from "./shared/toasts-container/toasts-modal/toasts-modal.component";
import { FormsModule } from "@angular/forms";
import { ChecklistListComponent } from "./shared/checklist-container/checklist/checklist-list/checklist-list.component";
import { ChecklistItemComponent } from "./shared/checklist-container/checklist/checklist-list/checklist-item/checklist-item.component";

@NgModule({
  declarations: [
    AppComponent,
    ChecklistContainerComponent,
    ToastsContainerComponent,
    ChecklistComponent,
    MainComponent,
    NavBarComponent,
    ToastsWebComponent,
    ToastButtonComponent,
    ToastsModalComponent,
    ChecklistListComponent,
    ChecklistItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatOptionModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
