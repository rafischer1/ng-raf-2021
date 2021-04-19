import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsModalComponent } from './toasts-modal.component';

describe('ToastsModalComponent', () => {
  let component: ToastsModalComponent;
  let fixture: ComponentFixture<ToastsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
