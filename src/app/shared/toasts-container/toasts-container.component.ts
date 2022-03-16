import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Toast, ToastsService } from "./state/toasts.service";
import { ToastsQuery } from "./state/toasts.query";

@Component({
  selector: "raf-toasts-container",
  templateUrl: "./toasts-container.component.html",
  styleUrls: ["./toasts-container.component.scss"],
})
export class ToastsContainerComponent {
  toasts$ = this.query.select((state) => state.toasts).pipe();

  constructor(private service: ToastsService, private query: ToastsQuery) {}

  deleteToast = (i: number) => this.service.deleteToast(i);
}
