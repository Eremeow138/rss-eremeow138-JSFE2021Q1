import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/models';
import { GameService } from 'src/app/services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private readonly gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getMode().subscribe(mode => {
      this.isGameMode = mode;
      this.isGuessed = false;
    });
    this.gameService.getGuessedWord().subscribe(word => {
      if (word === this.cardData?.word) {
        this.isGuessed = true;
      }
    });
  }

  @Input() cardData?: CardData;

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
      this.cardData &&
      !this.isFlipped &&
      !this.isGuessed
    ) {
      this.gameService.clickCard(this.cardData);
    }
  }
}
