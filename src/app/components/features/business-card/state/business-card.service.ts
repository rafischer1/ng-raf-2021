import { Injectable } from "@angular/core";
import { BusinessCardStore } from "./business-card.store";
import { LoggerService } from "../../../../shared/logging-service/logger.service";

@Injectable({
  providedIn: "root",
})
export class BusinessCardService {
  constructor(
    private store: BusinessCardStore,
    private logger: LoggerService
  ) {
  }

  updateBackground = (value: any) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, background: value } };
    });
    this.log("background");
  };

  updateBorderRadius = (value: number) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, borderRadius: value } };
    });
    this.log("border radius");
  };

  updateName = (value: string) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, name: value } };
    });
    this.log("name");
  };

  updateEmail = (value: string) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, email: value } };
    });
    this.log("email");
  };

  updatePosition = (value: string) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, position: value } };
    });
    this.log("role");
  };

  updateCatchPhrase = (value: string) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, catchPhrase: value } };
    });
    this.log("catch phrase");
  };

  updatePhone = (value: string) => {
    this.store.update((_old) => {
      return { card: { ..._old.card, phone: value } };
    });
    this.log("phone");
  };

  updatePrimaryFont = (value: string) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          primaryFont: { ..._old.card.primaryFont, family: value },
        },
      };
    });
    this.log("primaryFont family");
  };

  updatePrimaryColor = (value: string) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          primaryFont: { ..._old.card.primaryFont, color: value },
        },
      };
    });
    this.log("primaryFont color");
  };

  updatePrimarySize = (value: number) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          primaryFont: { ..._old.card.primaryFont, size: value },
        },
      };
    });
    this.log("primaryFont size");
  };

  updatePrimaryWeight = (value: string) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          primaryFont: { ..._old.card.primaryFont, weight: value },
        },
      };
    });
    this.log("primaryFont weight");
  };

  updateSecondaryFont = (value: string) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          secondaryFont: { ..._old.card.secondaryFont, family: value },
        },
      };
    });
    this.log("secondaryFont family");
  };

  updateSecondaryColor = (value: string) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          secondaryFont: { ..._old.card.secondaryFont, color: value },
        },
      };
    });
    this.log("secondaryFont color");
  };

  updateSecondarySize = (value: number) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          secondaryFont: { ..._old.card.secondaryFont, size: value },
        },
      };
    });
    this.log("secondaryFont size");
  };

  updateSecondaryWeight = (value: string) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          secondaryFont: { ..._old.card.secondaryFont, weight: value },
        },
      };
    });
    this.log("secondaryFont weight");
  };

  updateTertiaryFont = (value: string) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          tertiaryFont: { ..._old.card.tertiaryFont, family: value },
        },
      };
    });
    this.log("tertiaryFont family");
  };

  updateTertiaryColor = (value: string) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          tertiaryFont: { ..._old.card.tertiaryFont, color: value },
        },
      };
    });
    this.log("tertiaryFont color");
  };

  updateTertiarySize = (value: number) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          tertiaryFont: { ..._old.card.tertiaryFont, size: value },
        },
      };
    });
    this.log("tertiaryFont size");
  };

  updateTertiaryWeight = (value: string) => {
    this.store.update((_old) => {
      return {
        card: {
          ..._old.card,
          tertiaryFont: { ..._old.card.tertiaryFont, weight: value },
        },
      };
    });
    this.log("tertiaryFont weight");
  };

  log = (type: string) =>
    this.logger.addLog({
      context: "Business Card Update",
      text: type + " updated",
    });

  reset = () => this.store.reset()
}

