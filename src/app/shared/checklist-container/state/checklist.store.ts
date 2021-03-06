import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { ChecklistObject, initialStateChecklist } from "./checklist.model";

export interface ChecklistState {
  checklist: ChecklistObject[];
  active: boolean;
}

export function createInitialState(): ChecklistState {
  return {
    // * add to initial state when new tasks needed for checklist
    checklist: initialStateChecklist,
    active: false,
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "checklist" })
export class ChecklistStore extends Store<ChecklistState> {
  constructor() {
    super(createInitialState());
  }
}
