import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Toast, ToastsService } from "./state/toasts.service";
import { ToastsQuery } from "./state/toasts.query";

@Component({
  selector: "raf-toasts-container",
  templateUrl: "./toasts-container.component.html",
  styleUrls: ["./toasts-container.component.scss"],
})
export class ToastsContainerComponent implements OnInit {
  toasts$: Observable<Toast[]>;

  constructor(private service: ToastsService, private query: ToastsQuery) {}

  ngOnInit() {
    this.toasts$ = this.query.select((state) => state.toasts).pipe();
  }

  deleteToast = (i: number) => this.service.deleteToast(i);
}
