import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ChecklistStore, ChecklistState } from './checklist.store';

@Injectable({ providedIn: 'root' })
export class ChecklistQuery extends Query<ChecklistState> {

  constructor(protected store: ChecklistStore) {
    super(store);
  }

}
