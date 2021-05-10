import { MainComponent } from "./main.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { getTranslocoModule } from "../../transloco/transloco-testing.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("MainComponent", () => {
  let spectator: Spectator<MainComponent>;

  const createComponent = createComponentFactory({
    component: MainComponent,
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

  it("should have class 'main'", () => {
    expect(spectator.query(".main")).toExist();
  });
});
