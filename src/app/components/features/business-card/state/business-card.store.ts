import { Injectable } from "@angular/core";
import { Query, resetActive, Store, StoreConfig } from "@datorama/akita";
import { BusinessCard } from "./business-card.model";
import * as faker from "faker";

export interface BusinessCardState {
  card: BusinessCard;
}

export function createInitialCard(): BusinessCard {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    background: "#3dbebe",
    borderRadius: 0,
    doubleSided: false,
    phone: faker.phone.phoneNumber(),
    position: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase(),
    primaryFont: {
      size: 40,
      color: "#2d2d2d",
      family: "serif",
      weight: "normal",
    },
    secondaryFont: {
      size: 30,
      color: "#2d2d2d",
      family: "serif",
      weight: "normal",
    },
    tertiaryFont: {
      size: 22,
      color: "#2d2d2d",
      family: "serif",
      weight: "normal",
    },
  };
}

export function createInitialState(): BusinessCardState {
  return {
    card: createInitialCard(),
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "business-card" })
export class BusinessCardStore extends Store<BusinessCardState> {
  constructor() {
    super(createInitialState());
  }

  reset = () =>
    this.update((_) => {
      return { card: createInitialCard() };
    });
}

@Injectable({ providedIn: "root" })
export class BusinessCardQuery extends Query<BusinessCardState> {
  constructor(protected store: BusinessCardStore) {
    super(store);
  }
}
