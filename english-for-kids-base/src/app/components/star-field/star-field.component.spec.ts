import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFieldComponent } from './star-field.component';

describe('StarFieldComponent', () => {
  let component: StarFieldComponent;
  let fixture: ComponentFixture<StarFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
