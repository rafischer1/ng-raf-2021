import { Component } from "@angular/core";
import { HalloweenQuery } from "./state/halloween.store";

@Component({
  selector: "app-halloween",
  templateUrl: "./halloween.component.html",
  styleUrls: ["./halloween.component.scss"],
})
export class HalloweenComponent {
  constructor(private query: HalloweenQuery) {}
  types$ = this.query.select((state) => state.types);
}
