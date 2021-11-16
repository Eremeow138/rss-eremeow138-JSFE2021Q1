import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriesListComponent } from './admin-categories-list.component';

describe('AdminCategoriesListComponent', () => {
  let component: AdminCategoriesListComponent;
  let fixture: ComponentFixture<AdminCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
