import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "raf-contact-links",
  templateUrl: "./contact-links.component.html",
  styleUrls: ["./contact-links.component.scss"],
})
export class ContactLinksComponent implements OnInit {
  @Output() log: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
