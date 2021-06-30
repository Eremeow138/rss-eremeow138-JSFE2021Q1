import { Component, Input, OnInit } from '@angular/core';
import { Word } from 'src/app/models';
import { GameService } from 'src/app/services';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss'],
})
export class WordCardComponent implements OnInit {
  constructor(private readonly gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getMode().subscribe(mode => {
      this.isGameMode = mode;
      this.isGuessed = false;
    });
    this.gameService.getGuessedWord().subscribe(word => {
      if (word === this.word?.word) {
        this.isGuessed = true;
      }
    });
  }

  @Input() word?: Word;

  isGameMode = false;

  isFlipped = false;

  isGuessed = false;

  flip(): void {
    this.isFlipped = true;
  }

  flipBack(): void {
    this.isFlipped = false;
  }

  clickOnCard(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (
      !target.classList.contains('card__flip-button') &&
      this.word &&
      !this.isFlipped &&
      !this.isGuessed
    ) {
      this.gameService.clickCard(this.word);
    }
  }
}
