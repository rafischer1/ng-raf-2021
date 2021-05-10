import { InfoTabComponent } from './info-tab.component';
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { getTranslocoModule } from "../../../../../transloco/transloco-testing.module";

describe("InfoTabComponent", () => {
  let spectator: Spectator<InfoTabComponent>;

  const createComponent = createComponentFactory({
    component: InfoTabComponent,
    declarations: [],
    providers: [],
    schemas: [],
    imports: [
      getTranslocoModule(),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.component.ngOnInit();
  });

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });

});
