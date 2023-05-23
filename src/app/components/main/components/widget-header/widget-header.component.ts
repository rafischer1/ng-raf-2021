import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
    selector: "raf-widget-header",
    templateUrl: "./widget-header.component.html",
    styleUrls: ["./widget-header.component.scss"],
    standalone: true,
})
export class WidgetHeaderComponent {
  @Input() type!: "skills" | "info" | "links";
  @Input() locked$: Observable<boolean> = of(false);
  @Output() close = new EventEmitter<null>();
  @Output() lock = new EventEmitter<null>();
}
