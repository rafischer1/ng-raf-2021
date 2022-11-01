import { Component } from "@angular/core";
import { HalloweenQuery } from "./state/halloween.store";
import { HalloweenService } from "./state/halloween.service";

@Component({
  selector: "app-halloween",
  templateUrl: "./halloween.component.html",
  styleUrls: ["./halloween.component.scss"],
})
export class HalloweenComponent {
  constructor(
    private query: HalloweenQuery,
    private service: HalloweenService
  ) {}
  types$ = this.query.select((state) => state.types);
  spookyName$ = this.query.select((state) => state.spookyName);

  onKey(event: any) {
    if (event) this.service.updateSpookyName(event.target.value);
  }
}
