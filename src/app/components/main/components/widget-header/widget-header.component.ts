import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "raf-widget-header",
  templateUrl: "./widget-header.component.html",
  styleUrls: ["./widget-header.component.scss"],
})
export class WidgetHeaderComponent implements OnInit {
  @Input() type: "skills";

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
