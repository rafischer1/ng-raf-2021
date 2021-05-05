import { ContactGraphComponent } from "./contact-graph.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { getTranslocoModule } from "../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";

describe("ContactGraphComponent", () => {
  let spectator: Spectator<ContactGraphComponent>;

  const createComponent = createComponentFactory({
    component: ContactGraphComponent,
    declarations: [],
    providers: [],
    schemas: [],
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

  it("should have class 'contact-graph", () => {
    expect(spectator.query(".contact-graph")).toExist();
  });

  it("should translate from 'en' to 'fr'", () => {
    expect(spectator.query(".contact-graph")).toHaveText("en.main.skills");
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("fr");
    spectator.detectChanges();
    expect(spectator.query(".contact-graph")).toHaveText("fr.main.skills");
  });
});
