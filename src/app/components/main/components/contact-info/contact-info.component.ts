import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "raf-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"],
})
export class ContactInfoComponent  {
  @Input() contactInfoLocked$: Observable<boolean>;
  @Output() log: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() lock: EventEmitter<any> = new EventEmitter<any>();
  nameTabActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

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
