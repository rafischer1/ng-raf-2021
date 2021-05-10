import { ContactInfoComponent } from "./contact-info.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { getTranslocoModule } from "../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("ContactInfoComponent", () => {
  let spectator: Spectator<ContactInfoComponent>;

  const createComponent = createComponentFactory({
    component: ContactInfoComponent,
    declarations: [],
    providers: [],
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

  it("should emit event", () => {
    const spy = jest.spyOn(spectator.component.log, "emit");
    spectator.component.log.emit();
    expect(spy).toHaveBeenCalled();
  });

  it("should have class 'contact-info", () => {
    expect(spectator.query(".contact-info")).toExist();
  });

  it("should translate from 'en' to 'fr'", () => {
    expect(spectator.query(".contact-info")).toHaveText("en.main.info");
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("fr");
    spectator.detectChanges();
    expect(spectator.query(".contact-info")).toHaveText("fr.main.info");
  });
});
