import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToastsWebComponent } from "./components/features/toasts-web/toasts-web.component";
import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "toasts", component: ToastsWebComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
