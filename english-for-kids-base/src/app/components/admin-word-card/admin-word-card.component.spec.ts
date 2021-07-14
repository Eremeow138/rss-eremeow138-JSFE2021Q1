import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWordCardComponent } from './admin-word-card.component';

describe('AdminWordCardComponent', () => {
  let component: AdminWordCardComponent;
  let fixture: ComponentFixture<AdminWordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWordCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
