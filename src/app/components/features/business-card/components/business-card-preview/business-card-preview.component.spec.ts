import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardPreviewComponent } from './business-card-preview.component';

describe('BusinessCardPreviewComponent', () => {
  let component: BusinessCardPreviewComponent;
  let fixture: ComponentFixture<BusinessCardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCardPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
