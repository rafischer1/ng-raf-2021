import { Component } from "@angular/core";
import { ToastsService } from "./state/toasts.service";
import { ToastsQuery } from "./state/toasts.store";

@Component({
  selector: "raf-toasts-container",
  template: `<div class="toasts-container">
    <ng-container *ngFor="let toast of toasts$ | async; let i = index">
      <raf-toasts-modal
        (delete)="deleteToast(i)"
        [type]="toast.type"
        [message]="toast.message"
        [link]="toast.link"
      ></raf-toasts-modal>
    </ng-container>
  </div>`,
  styleUrls: ["./toasts-container.component.scss"],
})
export class ToastsContainerComponent {
  constructor(private service: ToastsService, private query: ToastsQuery) {}
  toasts$ = this.query.select((state) => state.toasts).pipe();
  deleteToast = (i: number) => this.service.deleteToast(i);
}
