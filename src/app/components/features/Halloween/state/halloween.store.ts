import { Injectable } from "@angular/core";
import { Query, Store, StoreConfig } from "@datorama/akita";

export interface HalloweenState {
  types: string[];
  spookyName: string;
}

export function createInitialState(): HalloweenState {
  return {
    types: ["🎃", "🧟", "🧛🏼‍"],
    spookyName: "",
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "halloween-store" })
export class HalloweenStore extends Store<HalloweenState> {
  constructor() {
    super(createInitialState());
  }
}

@Injectable({ providedIn: "root" })
export class HalloweenQuery extends Query<HalloweenState> {
  constructor(protected store: HalloweenStore) {
    super(store);
  }
}
