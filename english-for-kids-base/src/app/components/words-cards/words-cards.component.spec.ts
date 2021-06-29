import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsCardsComponent } from './words-cards.component';

describe('WordsCardsComponent', () => {
  let component: WordsCardsComponent;
  let fixture: ComponentFixture<WordsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordsCardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
