import { FontFormComponent } from "./font-form.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { getTranslocoModule } from "../../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";

describe("FontFormComponent", () => {
  let spectator: Spectator<FontFormComponent>;

  const createComponent = createComponentFactory({
    component: FontFormComponent,
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

  it("should correctly set the [type] input", () => {
    spectator.setInput("type", "primary");
    const spy = jest.spyOn(spectator.component.fontEvent, "emit");
    spectator.component.fontEvent.emit({
      type: spectator.component.type,
      property: "family",
      value: 2,
    });
    expect(spy).toHaveBeenCalledWith({
      type: "primary",
      property: "family",
      value: 2,
    });
  });

  it("should translate from 'en' to 'fr'", () => {
    expect(spectator.query("label#colorLabel")).toHaveText(
      "En.businesscard.color"
    );
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("fr");
    spectator.detectChanges();
    expect(spectator.query("label#colorLabel")).toHaveText(
      "Fr.businesscard.color"
    );
  });
});
