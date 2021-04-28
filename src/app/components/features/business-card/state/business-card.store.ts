import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { BusinessCard } from "./business-card.model";
import * as faker from "faker";

export interface BusinessCardState {
  card: BusinessCard;
}

export function createInitialCard(): BusinessCard {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    background: "#333333",
    color: "white",
    doubleSided: false,
    phone: "302 423 2120",
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
}
