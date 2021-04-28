import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  fontFamilyValueSet,
  fontWeightValueSet,
} from "../business-card-form/business-card-form.constants";

@Component({
  selector: "raf-font-form",
  templateUrl: "./font-form.component.html",
  styleUrls: ["./font-form.component.scss"],
})
export class FontFormComponent implements OnInit {
  @Input() type: "primary" | "secondary";
  fontFamilies: string[] = fontFamilyValueSet;
  fontWeights: string[] = fontWeightValueSet;

  @Output() fontEvent: EventEmitter<{
    property: "family" | "size" | "weight" | "color";
    type: "primary" | "secondary";
    value: any;
  }> = new EventEmitter<{
    property: "family" | "size" | "weight" | "color";
    type: "primary" | "secondary";
    value: any;
  }>();
  constructor() {}

  ngOnInit(): void {}

  fontSelect = (ev: any) =>
    this.fontEvent.emit({
      property: "family",
      type: this.type,
      value: ev.target.value,
    });

  colorChange = (ev: any) =>
    this.fontEvent.emit({
      property: "color",
      type: this.type,
      value: ev.target.value,
    });

  fontSizeChange = (ev: any) =>
    this.fontEvent.emit({
      property: "size",
      type: this.type,
      value: ev.target.value,
    });

  fontWeightChange = (ev: any) =>
    this.fontEvent.emit({
      property: "weight",
      type: this.type,
      value: ev.target.value,
    });
}
