import { Component, inject } from "@angular/core";
import { HalloweenQuery } from "./state/halloween.store";
import { HalloweenService } from "./state/halloween.service";

@Component({
  selector: "app-halloween",
  templateUrl: "./halloween.component.html",
  styleUrls: ["./halloween.component.scss"],
})
export class HalloweenComponent {
  private _query = inject(HalloweenQuery)
  private _service = inject(HalloweenService)
  types$ = this._query.select((state) => state.types);
  spookyName$ = this._query.select((state) => state.spookyName);
  onKey(event: any) {
    if (event) this._service.updateSpookyName(event.target.value);
  }
}
