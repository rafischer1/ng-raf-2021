import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "[spinner]",
  template: `
    <div class="container" [class.disabled]="disabled">
      <div *ngIf="loading" class="loader"></div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        justify-content: center;
      }

      .loader {
        position: absolute;
        border-radius: 50%;
        border-top: 3px solid white;
        border-right: 3px solid #3dbebe;
        border-bottom: 3px solid #7e3dbe;
        border-left: 3px solid #ddc643;
        width: 12px;
        height: 12px;
        -webkit-animation: spin 1.5s linear infinite;
        animation: spin 1.5s linear infinite;
      }

      .disabled {
        cursor: not-allowed;
      }

      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class SpinnerComponent {
  @Input()
  @HostBinding("disabled")
  disabled = false;
  @Input() loading: boolean = false;
}
