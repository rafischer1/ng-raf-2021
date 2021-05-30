import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { BusinessCardStore, BusinessCardState } from './business-card.store';

@Injectable({ providedIn: 'root' })
export class BusinessCardQuery extends Query<BusinessCardState> {
  constructor(protected store: BusinessCardStore) {
    super(store);
  }
}
