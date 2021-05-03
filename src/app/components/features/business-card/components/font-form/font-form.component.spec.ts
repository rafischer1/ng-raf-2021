import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontFormComponent } from './font-form.component';

describe('FontFormComponent', () => {
  let component: FontFormComponent;
  let fixture: ComponentFixture<FontFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
