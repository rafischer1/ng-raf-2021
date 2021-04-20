import { ContactGraphComponent } from "./contact-graph.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";

describe("ContactGraphComponent", () => {
  let spectator: Spectator<ContactGraphComponent>;
  const createComponent = createComponentFactory(ContactGraphComponent);

  beforeEach(() => (spectator = createComponent()));

  it("should exists", () => {
    expect(spectator.component).toExist();
  });
});
