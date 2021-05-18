import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "raf-widget-header",
  templateUrl: "./widget-header.component.html",
  styleUrls: ["./widget-header.component.scss"],
})
export class WidgetHeaderComponent implements OnInit {
  @Input() type: "skills" | "info" | "links";
  @Input() locked$: Observable<boolean>;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() lock: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit(): void {}
}
