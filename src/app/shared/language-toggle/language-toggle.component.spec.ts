import { LanguageToggleComponent } from "./language-toggle.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { LanguageIconComponent } from "./language-icon/language-icon.component";
import { getTranslocoModule } from "../../transloco/transloco-testing.module";

describe("LanguageToggleComponent", () => {
  let spectator: Spectator<LanguageToggleComponent>;

  const createComponent = createComponentFactory({
    component: LanguageToggleComponent,
    declarations: [LanguageIconComponent],
    imports: [getTranslocoModule()],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.component.ngOnInit();
  });

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });
});
