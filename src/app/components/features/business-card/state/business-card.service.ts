import { Injectable } from "@angular/core";
import { BusinessCardStore } from "./business-card.store";

@Injectable({
  providedIn: "root",
})
export class BusinessCardService {
  constructor(private store: BusinessCardStore) {}

  updateBackground = (value: any) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, background: value } };
    });
  };

  updateColor = (value: any) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, color: value } };
    });
  };

  updateName = (value: string) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, name: value } };
    });
  };

  updateEmail = (value: string) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, email: value } };
    });
  };
}
