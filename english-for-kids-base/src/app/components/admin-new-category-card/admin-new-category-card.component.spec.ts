import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewCategoryCardComponent } from './admin-new-category-card.component';

describe('AdminNewCategoryCardComponent', () => {
  let component: AdminNewCategoryCardComponent;
  let fixture: ComponentFixture<AdminNewCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminNewCategoryCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
