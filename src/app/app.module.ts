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
import { ContactGraphComponent } from "./components/main/components/contact-graph/contact-graph.component";
import { BarChartModule, PieChartModule } from "@swimlane/ngx-charts";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { InfoTabComponent } from "./components/main/components/contact-info/info-tab/info-tab.component";
import { ContactLinksComponent } from "./components/main/components/contact-links/contact-links.component";
import { LanguageToggleComponent } from "./shared/language-toggle/language-toggle.component";
import { LanguageIconComponent } from "./shared/language-toggle/language-icon/language-icon.component";
import { ContactInfoComponent } from "./components/main/components/contact-info/contact-info.component";
import { LoggerComponent } from "./shared/logging-service/logger/logger.component";
import { BusinessCardComponent } from "./components/features/business-card/business-card.component";
import { BusinessCardFormComponent } from "./components/features/business-card/components/business-card-form/business-card-form.component";
import { BusinessCardPreviewComponent } from "./components/features/business-card/components/business-card-preview/business-card-preview.component";
import { FontFormComponent } from "./components/features/business-card/components/font-form/font-form.component";
import { ImageFormComponent } from "./components/features/business-card/components/image-form/image-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { WidgetHeaderComponent } from "./components/main/components/widget-header/widget-header.component";
import { MainSideBarIconComponent } from "./components/main/components/main-side-bar-icon/main-side-bar-icon.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { CommonModule } from "@angular/common";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { AlertComponent } from "./components/elements/alert/alert.component";
import { NgForDirective } from "./shared/directives/ng-for.extended.directive";
import { HalloweenComponent } from "./components/features/halloween/halloween.component";

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
    ContactGraphComponent,
    ContactLinksComponent,
    LanguageToggleComponent,
    LanguageIconComponent,
    ContactInfoComponent,
    LoggerComponent,
    InfoTabComponent,
    BusinessCardComponent,
    BusinessCardFormComponent,
    BusinessCardPreviewComponent,
    FontFormComponent,
    ImageFormComponent,
    WidgetHeaderComponent,
    MainSideBarIconComponent,
    SpinnerComponent,
    AlertComponent,
    NgForDirective,
    HalloweenComponent
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
    BarChartModule,
    PieChartModule,
    DragDropModule,
    MatTabsModule,
    CommonModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
