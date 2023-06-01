import { Component, Input } from "@angular/core";

@Component({
  selector: "signals-element",
  template: `<div>Signals Element {{ message }}</div>`,
  styles: [],
})
export class SignalsComponent {
  @Input() message!: string;
}
