import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Observable } from "rxjs";

@Component({
  selector: "raf-info-tab",
  templateUrl: "./info-tab.component.html",
  styleUrls: ["./info-tab.component.scss"],
  animations: [
    trigger("active", [
      // trigger [@active]="active"
      state(
        "true",
        style({
          // final CSS following animation: TO:
          // backgroundColor: "#333",
          // border: "1px solid #333 !important",
          // color: "#F9F9F9;",
          opacity: "1",
        })
      ),
      // FROM:
      state(
        "true",
        style({
          // backgroundColor: "#bcf1e9",
          // color: "#F9F9F9;",
          opacity: "0",
        })
      ),
      transition("true => false", animate("2000ms ease-out")),
      transition("false => true", animate("2000ms ease-out")),
    ]),
  ],
})
export class InfoTabComponent {
  @Input() active$!: Observable<boolean>;
  @Input() title!: string;

  @Output() toggle = new EventEmitter<any>();
  constructor() {}
}
