import { Injectable } from "@angular/core";
import { ChecklistState, ChecklistStore } from "./checklist.store";
import { deepFreeze } from "@datorama/akita/src/internal/deep-freeze";
import { ChecklistObject, ChecklistStatus } from "./checklist.model";

@Injectable({
  providedIn: "root",
})
export class ChecklistService {
  constructor(private store: ChecklistStore) {}

  open = () =>
    this.store.update((_old) => {
      return { ..._old, active: true };
    });

  close = () =>
    this.store.update((_old) => {
      return { ..._old, active: false };
    });

  updateListItem(newChecklist: ChecklistObject[]) {
    this.store.update((_old) => {
      return {
        ..._old,
        checklist: newChecklist,
      };
    });
  }
}

//  = status;
