import { Component, Input } from "@angular/core";

@Component({
  selector: "alert-element",
  template: `<div>Alert Element {{ message }}</div>`,
  styles: [
    `
      div {
        color: red;
        padding: 10px;
        border: 2px solid red;
        position: absolute;
        bottom: 0;
      }
    `,
  ],
})
export class AlertComponent {
  @Input() message!: string;
}
