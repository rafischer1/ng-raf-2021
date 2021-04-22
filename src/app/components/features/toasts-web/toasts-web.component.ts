import { Component, OnInit } from "@angular/core";
import { ToastsService } from "../../../shared/toasts-container/state/toasts.service";
import { TranslocoService } from "@ngneat/transloco";
import { LoggerService } from "../../../shared/logging-service/logger.service";

@Component({
  selector: "raf-toasts-web",
  templateUrl: "./toasts-web.component.html",
  styleUrls: ["./toasts-web.component.scss"],
})
export class ToastsWebComponent implements OnInit {
  constructor(
    private translate: TranslocoService,
    private toasts: ToastsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {}

  showToast = (type: string) => {
    this.logger.addLog({
      context: "ToastButtonClicked",
      text: `${type.toUpperCase()} toast sent`,
    });
    this.toasts.showToast(
      type,
      this.translate.translate(`toasts.${type}Msg`),
      type === "link" ? "" : null
    );
  };
}
