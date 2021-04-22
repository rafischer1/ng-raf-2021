import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoggerComponent } from "./logger.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { of } from "rxjs";

describe("LoggerComponent", () => {
  let spectator: Spectator<LoggerComponent>;

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
