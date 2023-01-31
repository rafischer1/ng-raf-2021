import { LoggerComponent } from "./logger.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { LoggerStore } from "../logger.store";

describe("LoggerComponent", () => {
  let spectator: Spectator<LoggerComponent>;
  let store: LoggerStore;

  const createComponent = createComponentFactory({
    component: LoggerComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });
});
