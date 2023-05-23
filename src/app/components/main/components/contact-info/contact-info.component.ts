import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Component({
    selector: "raf-contact-info",
    templateUrl: "./contact-info.component.html",
    styleUrls: ["./contact-info.component.scss"],
    standalone: true,
})
export class ContactInfoComponent {
  @Input() contactInfoLocked$: Observable<boolean> = of(true);
  @Output() log = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  @Output() lock = new EventEmitter<any>();
  nameTabActive$ = new BehaviorSubject<boolean>(true);

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
