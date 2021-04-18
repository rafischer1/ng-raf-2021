import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TranslocoRootModule } from "./transloco/transloco-root.module";
import { ChecklistContainerComponent } from './shared/checklist-container/checklist-container.component';
import { ToastsContainerComponent } from './shared/toasts-container/toasts-container.component';
import { ChecklistComponent } from './shared/checklist-container/checklist/checklist.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [AppComponent, ChecklistContainerComponent, ToastsContainerComponent, ChecklistComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
