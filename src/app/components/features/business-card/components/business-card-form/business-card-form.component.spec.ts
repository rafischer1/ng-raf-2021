import { BusinessCardFormComponent } from "./business-card-form.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { mockProvider } from "@ngneat/spectator";
import { Router } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { getTranslocoModule } from "../../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";

describe("BusinessCardFormComponent", () => {
  let spectator: Spectator<BusinessCardFormComponent>;

  const createComponent = createComponentFactory({
    component: BusinessCardFormComponent,
    declarations: [],
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

  it("should have class 'card-form'", () => {
    expect(spectator.query(".card-form")).toExist();
  });

  it("should change background color on input change", () => {
    const input = spectator.query("#background");
    spectator.typeInElement("#333333", input);
    expect(input).toHaveValue("#333333");
  });

  it("should translate", () => {
    expect(spectator.query("#catchPhrase")).toHaveText(
      "En.businesscard.catch Phrase"
    );
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("es");
    spectator.detectChanges();
    expect(spectator.query("#catchPhrase")).toHaveText(
      "Es.businesscard.catch Phrase"
    );
  });
});
