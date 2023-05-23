import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "raf-contact-links",
  templateUrl: "./contact-links.component.html",
  styleUrls: ["./contact-links.component.scss"],
  standalone: true,
})
export class ContactLinksComponent {
  @Input() contactLinksLocked$: Observable<boolean>;
  @Output() log: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() lock: EventEmitter<any> = new EventEmitter<any>();
}
