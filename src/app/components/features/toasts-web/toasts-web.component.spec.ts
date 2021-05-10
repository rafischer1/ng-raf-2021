import { ToastsWebComponent } from "./toasts-web.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { getTranslocoModule } from "../../../transloco/transloco-testing.module";

describe("ToastsWebComponent", () => {
  let spectator: Spectator<ToastsWebComponent>;

  const createComponent = createComponentFactory({
    component: ToastsWebComponent,
    declarations: [],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [getTranslocoModule()],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.component.ngOnInit();
  });

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });

  it("should have class 'toast-buttons-container'", () => {
    expect(spectator.query(".toast-buttons-container")).toExist();
  });
});
