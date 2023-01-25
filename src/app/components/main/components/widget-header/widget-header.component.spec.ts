import { WidgetHeaderComponent } from "./widget-header.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { getTranslocoModule } from "../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";

describe("WidgetHeaderComponent", () => {
  let spectator: Spectator<WidgetHeaderComponent>;

  const createComponent = createComponentFactory({
    component: WidgetHeaderComponent,
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

  it("should have class 'widget-header", () => {
    expect(spectator.query(".widget-header")).toExist();
  });

  it("should translate from 'en' to 'pt'", () => {
    spectator.setInput("type", "skills");
    expect(spectator.query(".contact-graph")).toHaveText("en.main.skills");
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("pt");
    spectator.detectChanges();
    expect(spectator.query(".contact-graph")).toHaveText("pt.main.skills");
  });
});
