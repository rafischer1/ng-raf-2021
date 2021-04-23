import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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
          backgroundColor: "#333",
          border: "1px solid #333 !important",
        })
      ),
      // FROM:
      state(
        "true",
        style({
          backgroundColor: "#bcf1e9",
        })
      ),
      transition("true => false", animate("200ms ease-out")),
      transition("false => true", animate("200ms ease-out")),
    ]),
  ],
})
export class InfoTabComponent implements OnInit {
  @Input() active$: Observable<boolean>;
  @Input() title: string;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
