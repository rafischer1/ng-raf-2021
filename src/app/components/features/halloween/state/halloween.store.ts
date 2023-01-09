import { Injectable } from "@angular/core";
import { Query, Store, StoreConfig } from "@datorama/akita";

export interface HalloweenState {
  types: string[];
  spookyName: string | null;
}

export function createInitialState(): HalloweenState {
  return {
    types: ["🎃", "🧟", "🧛🏼‍", "Dracula", "Werewolf", "Mummy"],
    spookyName: null,
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
