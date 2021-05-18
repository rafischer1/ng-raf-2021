import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSideBarIconComponent } from './main-side-bar-icon.component';

describe('ContactGraphIconComponent', () => {
  let component: MainSideBarIconComponent;
  let fixture: ComponentFixture<MainSideBarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSideBarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSideBarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
