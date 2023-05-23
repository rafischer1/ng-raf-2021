import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
    selector: "raf-main-side-bar-icon",
    template: `<div
    *transloco="let t; read: 'main'"
    (click)="open.emit(type)"
    [@close]="active"
  >
    <p>{{ t(type) | uppercase }}</p>
  </div>`,
    styles: [
        `
      div {
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        background: #2d2d2d;
        color: white;
        font-weight: bold;
        text-align: center;
        margin: 5px;
        padding: 0 3px;
      }

      div:hover {
        filter: brightness(120%);
      }

      div:active {
        filter: brightness(150%);
      }
    `,
    ],
    animations: [
        trigger("close", [
            state("true", style({
                //  TO:
                opacity: 1,
                marginRight: "20px",
            })),
            // FROM:
            state("false", style({
                opacity: 0,
                marginLeft: "20px",
            })),
            transition("true => false", animate("750ms ease-out")),
            transition("false => true", animate("750ms ease-out")),
        ]),
    ],
    standalone: true,
})
export class MainSideBarIconComponent {
  @Input() type!: "skills" | "info" | "links";
  @Input() active = false;
  @Output() open = new EventEmitter<string>();
}
