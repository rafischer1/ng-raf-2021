import { Injectable } from "@angular/core";
import { HalloweenStore } from "./halloween.store";

@Injectable({
  providedIn: "root",
})
export class HalloweenService {
  constructor(private store: HalloweenStore) {}
  updateSpookyName = (name: string) => {
    this.store.update((_old) => {
      return { ..._old, spookyName: name };
    });
  };
  clearSpookyName = () => {
    this.store.update((_old) => {
      return { ..._old, spookyName: "" };
    });
  }
}
