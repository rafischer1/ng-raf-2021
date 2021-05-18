import { MainSideBarIconComponent } from "./main-side-bar-icon.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { getTranslocoModule } from "../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";

describe("MainSideBarIconComponent", () => {
  let spectator: Spectator<MainSideBarIconComponent>;

  const createComponent = createComponentFactory({
    component: MainSideBarIconComponent,
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
  });

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });

  it("should emit open event", () => {
    const spy = jest.spyOn(spectator.component.open, "emit");
    spectator.component.open.emit();
    expect(spy).toHaveBeenCalled();
  });

  it("should translate from 'en' to 'de'", () => {
    spectator.setInput("type", "links");
    expect(spectator.query("p")).toHaveText("EN.MAIN.LINKS");
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("de");
    spectator.detectChanges();
    expect(spectator.query("p")).toHaveText("DE.MAIN.LINKS");
  });
});
