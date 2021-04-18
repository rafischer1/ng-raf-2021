import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ChecklistState {
   key: string;
}

export function createInitialState(): ChecklistState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'checklist' })
export class ChecklistStore extends Store<ChecklistState> {

  constructor() {
    super(createInitialState());
  }

}

