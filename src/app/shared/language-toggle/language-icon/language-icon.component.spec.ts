import { LanguageIconComponent } from "./language-icon.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";

describe("LanguageIconComponent", () => {
  let spectator: Spectator<LanguageIconComponent>;

  const createComponent = createComponentFactory({
    component: LanguageIconComponent,
    declarations: [],
    imports: [],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.component.ngOnInit();
  });

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });
});
