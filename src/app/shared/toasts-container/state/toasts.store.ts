import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { Toast } from "./toasts.service";

export interface ToastsState {
  toasts: Toast[];
}

export function createInitialState(): ToastsState {
  return {
    toasts: [],
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "toasts-store" })
export class ToastsStore extends Store<ToastsState> {
  constructor() {
    super(createInitialState());
  }
}
