import { ComponentFixture, TestBed } from "@angular/core/testing";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { NavBarComponent } from "./nav-bar.component";

describe("NavBarComponent", () => {
  let spectator: Spectator<NavBarComponent>;

  const createComponent = createComponentFactory({
    component: NavBarComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.component.ngOnInit();
  });

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });
});
