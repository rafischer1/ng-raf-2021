import { BusinessCardPreviewComponent } from "./business-card-preview.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { getTranslocoModule } from "../../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";
import { DragDropModule } from "@angular/cdk/drag-drop";

describe("BusinessCardPreviewComponent", () => {
  let spectator: Spectator<BusinessCardPreviewComponent>;

  const createComponent = createComponentFactory({
    component: BusinessCardPreviewComponent,
    declarations: [],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
      DragDropModule,
      getTranslocoModule({
        translocoConfig: { reRenderOnLangChange: true },
      }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.component.ngOnInit();
  });

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });

  it("should have class 'button-container'", () => {
    expect(spectator.query(".button-container")).toExist();
  });

  it("should translate from 'en' to 'fr'", () => {
    expect(spectator.query("#exportBtn")).toHaveText(
      "en.businessCard.exportPDF"
    );
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("fr");
    spectator.detectChanges();
    expect(spectator.query("#exportBtn")).toHaveText(
      "fr.businessCard.exportPDF"
    );
  });
});
