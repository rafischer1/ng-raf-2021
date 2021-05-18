import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "raf-contact-links",
  templateUrl: "./contact-links.component.html",
  styleUrls: ["./contact-links.component.scss"],
})
export class ContactLinksComponent implements OnInit {
  @Input() contactLinksLocked$: Observable<boolean>;
  @Output() log: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() lock: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
