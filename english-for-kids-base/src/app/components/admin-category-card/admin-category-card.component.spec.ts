import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryCardComponent } from './admin-category-card.component';

describe('AdminCategoryCardComponent', () => {
  let component: AdminCategoryCardComponent;
  let fixture: ComponentFixture<AdminCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
