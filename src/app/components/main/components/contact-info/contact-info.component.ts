import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "raf-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"],
})
export class ContactInfoComponent implements OnInit {
  nameTabActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  @Output() log: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  toggleInfoTab(tab: string) {
    switch (tab) {
      case "nameTab":
        return this.nameTabActive$.next(!this.nameTabActive$.getValue());
    }
  }

  getObservable$(tab: string): Observable<boolean> {
    switch (tab) {
      case "nameTab":
        return this.nameTabActive$.asObservable();
      default:
        return null;
    }
  }
}
