import { ContactLinksComponent } from "./contact-links.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { getTranslocoModule } from "../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";

describe("ContactLinksComponent", () => {
  let spectator: Spectator<ContactLinksComponent>;

  const createComponent = createComponentFactory({
    component: ContactLinksComponent,
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

  it("should have class 'contact-links", () => {
    expect(spectator.query(".contact-links")).toExist();
  });

  it("should translate from 'en' to 'fr'", () => {
    expect(spectator.query(".contact-links")).toHaveText(
      "en.main.linksLinkedInGitHubEmail"
    );
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("fr");
    spectator.detectChanges();
    expect(spectator.query(".contact-links")).toHaveText(
      "fr.main.linksLinkedInGitHubEmail"
    );
  });
});
