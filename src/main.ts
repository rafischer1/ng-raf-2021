import { enableProdMode, LOCALE_ID, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BarChartModule, PieChartModule } from "@swimlane/ngx-charts";
import { FormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { provideAnimations } from "@angular/platform-browser/animations";
import { TranslocoRootModule } from "./app/transloco/transloco-root.module";
import { withInterceptorsFromDi, provideHttpClient } from "@angular/common/http";
import { AppRoutingModule } from "./app/app-routing.module";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, TranslocoRootModule, MatIconModule, MatOptionModule, FormsModule, BarChartModule, PieChartModule, DragDropModule, MatTabsModule, CommonModule, NgxSkeletonLoaderModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
    ]
})
  .catch((err) => console.error(err));
