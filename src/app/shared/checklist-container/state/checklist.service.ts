import { Injectable } from "@angular/core";
import { ChecklistStore } from "./checklist.store";
import { ChecklistObject } from "./checklist.model";

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
