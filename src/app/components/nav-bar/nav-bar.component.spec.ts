import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { NavBarComponent } from "./nav-bar.component";
import { getTranslocoModule } from "../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";
import { LanguageToggleComponent } from "../../shared/language-toggle/language-toggle.component";
import { LanguageIconComponent } from "../../shared/language-toggle/language-icon/language-icon.component";
import { mockProvider } from "@ngneat/spectator";
import { Router } from "@angular/router";

describe("NavBarComponent", () => {
  let spectator: Spectator<NavBarComponent>;

  const createComponent = createComponentFactory({
    component: NavBarComponent,
    declarations: [LanguageToggleComponent, LanguageIconComponent],
    providers: [mockProvider(Router)],
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

  it("should have class 'nav-bar'", () => {
    expect(spectator.query(".nav-bar")).toExist();
  });

  it("should translate", () => {
    expect(spectator.query("button#toasts")).toHaveText("En.nav.toasts");
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("pt");
    spectator.detectChanges();
    expect(spectator.query("button#toasts")).toHaveText("Pt.nav.toasts");
  });
});
