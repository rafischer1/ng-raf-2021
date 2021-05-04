import { PdfService } from "./pdf.service";
import { createServiceFactory, SpectatorService } from "@ngneat/spectator";

describe("PdfService", () => {
  let spectator: SpectatorService<PdfService>;
  const createService = createServiceFactory(PdfService);

  beforeEach(() => (spectator = createService()));

  it("should exist", () => {
    expect(spectator.service).toBeTruthy();
  });
});
