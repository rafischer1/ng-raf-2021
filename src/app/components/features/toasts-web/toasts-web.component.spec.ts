import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsWebComponent } from './toasts-web.component';

describe('ToastsWebComponent', () => {
  let component: ToastsWebComponent;
  let fixture: ComponentFixture<ToastsWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastsWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
