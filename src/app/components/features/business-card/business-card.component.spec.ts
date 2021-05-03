import { BusinessCardComponent } from "./business-card.component";
import { getTranslocoModule } from "../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { mockProvider } from "@ngneat/spectator";
import { Router } from "@angular/router";
import { BusinessCardFormComponent } from "./components/business-card-form/business-card-form.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("BusinessCardComponent", () => {
  let spectator: Spectator<BusinessCardComponent>;

  const createComponent = createComponentFactory({
    component: BusinessCardComponent,
    declarations: [BusinessCardFormComponent],
    providers: [mockProvider(Router)],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
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

  it("should have class 'business-card-container'", () => {
    expect(spectator.query(".business-card-container")).toExist();
  });

  it("should translate", () => {
    expect(spectator.query("h1")).toHaveText("En.businesscard.title");
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("de");
    spectator.detectChanges();
    expect(spectator.query("h1")).toHaveText("De.businesscard.title");
  });
});
