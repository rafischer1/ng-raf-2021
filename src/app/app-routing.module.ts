import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToastsWebComponent } from "./components/features/toasts-web/toasts-web.component";
import { MainComponent } from "./components/main/main.component";
import { BusinessCardComponent } from "./components/features/business-card/business-card.component";
import { HalloweenComponent } from "./components/features/halloween/halloween.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "toasts", component: ToastsWebComponent },
  { path: "biz", component: BusinessCardComponent },
  { path: "halloween", component: HalloweenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
