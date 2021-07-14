import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWordsListComponent } from './admin-words-list.component';

describe('AdminWordsListComponent', () => {
  let component: AdminWordsListComponent;
  let fixture: ComponentFixture<AdminWordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWordsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
