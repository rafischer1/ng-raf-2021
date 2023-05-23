import { NgForOf } from "@angular/common";
import {
  Directive,
  Host,
  Inject,
  InjectionToken,
  Input,
  Optional,
} from "@angular/core";

export const TRACK_ID = new InjectionToken<string>("TRACK_ID");

@Directive({
    selector: "[ngForX]",
    standalone: true,
})
export class NgForDirective {
  @Input() ngForTrackId: string = this.trackId;

  constructor(
    @Host() private ngFor: NgForOf<any>,
    @Optional() @Inject(TRACK_ID) private trackId = "id"
  ) {
    this.ngFor.ngForTrackBy ||= (index, item) => item[this.ngForTrackId];
  }
}
