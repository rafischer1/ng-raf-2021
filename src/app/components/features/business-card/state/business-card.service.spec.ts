import { BusinessCardService } from "./business-card.service";
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from "@ngneat/spectator";
import { TranslocoService } from "@ngneat/transloco";

describe("BusinessCardService", () => {
  let spectator: SpectatorService<BusinessCardService>;
  const createService = createServiceFactory({
    service: BusinessCardService,
    providers: [mockProvider(TranslocoService)],
  });

  beforeEach(() => (spectator = createService()));

  it("should exist", () => {
    expect(spectator.service).toBeTruthy();
  });
});
