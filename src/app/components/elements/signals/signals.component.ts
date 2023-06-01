import { Component, signal } from "@angular/core";

@Component({
  selector: "signals-element",
  template: `<div>Signals Element:::: {{ count() }}</div>
    <br />
    <div>{{ setTime() }}</div>`,
  styles: [],
})
export class SignalsComponent {
  count = signal(0);
  setTime = ():void => {
    setTimeout(() => {
      this.count.set(3);
    }, 5000);
  };
}
