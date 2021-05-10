import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { getTranslocoModule } from "../../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";
import { ImageFormComponent } from "./image-form.component";

describe("ImageFormComponent", () => {
  let spectator: Spectator<ImageFormComponent>;

  const createComponent = createComponentFactory({
    component: ImageFormComponent,
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

  it("should emit toggleButton value", () => {
    const spy = jest.spyOn(spectator.component.toggleImage, "emit");
    spectator.component.toggle();
    expect(spy).toHaveBeenCalledWith(false);
  });

  it("should emit imageAdd value", () => {
    const spy = jest.spyOn(spectator.component.imageAdd, "emit");
    spectator.component.imageAdd.emit({
      src: "src",
      width: 2,
      height: 2,
      opacity: 0.4,
      borderRadius: 20,
      active: true,
    });
    expect(spy).toHaveBeenCalledWith({
      src: "src",
      width: 2,
      height: 2,
      opacity: 0.4,
      borderRadius: 20,
      active: true,
    });
  });

  it("should translate from 'en' to 'pt'", () => {
    expect(spectator.query("button#randomImgBtn")).toHaveText(
      "En.businesscard.randomimage"
    );
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("pt");
    spectator.detectChanges();
    expect(spectator.query("button#randomImgBtn")).toHaveText(
      "Pt.businesscard.randomimage"
    );
  });
});
