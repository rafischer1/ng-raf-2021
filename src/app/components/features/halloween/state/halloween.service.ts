import { inject, Injectable } from "@angular/core";
import { HalloweenStore } from "./halloween.store";

@Injectable({
  providedIn: "root",
})
export class HalloweenService {
  _store = inject(HalloweenStore);
  updateSpookyName = (name: string) => {
    this._store.update((_old) => {
      return { ..._old, spookyName: name };
    });
  };
  clearSpookyName = () => {
    this._store.update((_old) => {
      return { ..._old, spookyName: "" };
    });
  };
  setNewType = (type: string) => {
    this._store.update((_old) => {
      return { types: [..._old.types, type], spookyName: _old.spookyName };
    });
  };
}
