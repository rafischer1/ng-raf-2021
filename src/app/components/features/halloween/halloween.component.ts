import { Component, inject } from "@angular/core";
import { HalloweenQuery } from "./state/halloween.store";
import { HalloweenService } from "./state/halloween.service";


@Component({
  selector: "app-halloween",
  templateUrl: "./halloween.component.html",
  styleUrls: ["./halloween.component.scss"],
  standalone: false,
  // standalone: true,
  // imports: []
})
export class HalloweenComponent {
  private _query = inject(HalloweenQuery);
  private _service = inject(HalloweenService);
  title = "Halloween!"
  types$ = this._query.select((state) => state.types);
  spookyName$ = this._query.select((state) => state.spookyName);
  // onKey(event: any, form: NgForm) {
  //   if (event) this._service.updateSpookyName(event.target.value);
  //
  //   // console.log("Your form data : ", form.value);
  // }
  onKey(event: any) {
    if (event) this._service.updateSpookyName(event.target.value);

    // console.log("Your form data : ", form.value);
  }
  onClear = () => this._service.clearSpookyName();
}
