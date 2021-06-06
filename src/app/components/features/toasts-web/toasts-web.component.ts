import { Component } from "@angular/core";
import { ToastsService } from "../../../shared/toasts-container/state/toasts.service";
import { TranslocoService } from "@ngneat/transloco";
import { LoggerService } from "../../../shared/logging-service/logger.service";

@Component({
  selector: "raf-toasts-web",
  template: `<div class="toast-buttons-container">
    <ng-container *ngFor="let type of toastTypes">
      <raf-toast-button
        [type]="type"
        (show)="showToast(type)"
      ></raf-toast-button>
    </ng-container>
  </div>`,
  styles: [
    `
      .toast-buttons-container {
        margin-top: 5px;
      }
    `,
  ],
})
export class ToastsWebComponent {
  toastTypes: string[] = ["success", "info", "warn", "alert", "link"];
  constructor(
    private translate: TranslocoService,
    private toasts: ToastsService,
    private logger: LoggerService
  ) {}

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
