import { Component } from "@angular/core";

@Component({
  selector: "raf-business-card",
  template: `<ng-template transloco let-t [translocoRead]="'businessCard'">
    <h1>{{ t("title") | titlecase }}</h1>
    <div class="business-card-container">
      <div class="business-card-form">
        <raf-business-card-form></raf-business-card-form>
      </div>
      <div class="business-card-preview">
        <raf-business-card-preview></raf-business-card-preview>
      </div>
    </div>
  </ng-template>`,
  styles: [
    `
      .business-card-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 100%;
      }

      .business-card-form {
        flex-basis: 20%;
      }

      .business-card-preview {
        border-left: 5px solid #2d2d2d;
        color: white;
        text-align: center;
        flex-basis: 55%;
      }
    `,
  ],
})
export class BusinessCardComponent {}
