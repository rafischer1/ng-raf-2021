import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { ToastsStore, ToastsState } from "./toasts.store";

@Injectable({ providedIn: "root" })
export class ToastsQuery extends Query<ToastsState> {
  constructor(protected store: ToastsStore) {
    super(store);
  }
}
