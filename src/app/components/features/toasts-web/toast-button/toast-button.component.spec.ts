import { ToastButtonComponent } from "./toast-button.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { getTranslocoModule } from "../../../../transloco/transloco-testing.module";
import { TranslocoService } from "@ngneat/transloco";

describe("ToastButtonComponent", () => {
  let spectator: Spectator<ToastButtonComponent>;

  const createComponent = createComponentFactory({
    component: ToastButtonComponent,
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

  it("should set class from [type] input]", () => {
    spectator.setInput("type", "awesome-type");
    spectator.detectChanges();
    expect(spectator.query(".awesome-type")).toExist();
  });

  it("should emit event", () => {
    const spy = jest.spyOn(spectator.component.show, "emit");
    spectator.component.show.emit();
    expect(spy).toHaveBeenCalled();
  });

  it("should have class 'toast-button'", () => {
    expect(spectator.query(".toast-button")).toExist();
  });

  it("should translate", () => {
    spectator.setInput("type", "peace");
    expect(spectator.query(".toast-button")).toHaveText("EN.TOASTS.PEACE");
    const service = spectator.inject(TranslocoService);
    service.setActiveLang("de");
    spectator.detectChanges();
    expect(spectator.query(".toast-button")).toHaveText("DE.TOASTS.PEACE");
  });
});
