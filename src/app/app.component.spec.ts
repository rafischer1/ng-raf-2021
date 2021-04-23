import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { LanguageToggleComponent } from "./shared/language-toggle/language-toggle.component";
import { TranslocoRootModule } from "./transloco/transloco-root.module";

describe("AppComponent", () => {
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [NavBarComponent, LanguageToggleComponent],
    imports: [TranslocoRootModule],
  });

  let spectator: Spectator<AppComponent>;

  beforeEach(() => (spectator = createComponent()));

  it("should create the app", () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });
});
