import { Component, OnInit } from "@angular/core";
import { ToastsService } from "../../../shared/toasts-container/state/toasts.service";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "raf-toasts-web",
  templateUrl: "./toasts-web.component.html",
  styleUrls: ["./toasts-web.component.scss"],
})
export class ToastsWebComponent implements OnInit {
  constructor(
    private translate: TranslocoService,
    private toasts: ToastsService
  ) {}

  ngOnInit(): void {}

  showToast = (type: string) =>
    this.toasts.showToast(
      type,
      this.translate.translate(`toasts.${type}Msg`),
      type === "link" ? "" : null
    );
}
