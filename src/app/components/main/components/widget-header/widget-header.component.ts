import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "raf-widget-header",
  templateUrl: "./widget-header.component.html",
  styleUrls: ["./widget-header.component.scss"],
})
export class WidgetHeaderComponent implements OnInit {
  @Input() type: "skills";
  constructor() {}

  ngOnInit(): void {}
}
