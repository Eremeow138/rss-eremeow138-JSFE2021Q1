import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/models';
import { GameService, StatisticsDataService } from 'src/app/services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardData?: CardData;

  public isGameMode = false;

  public isFlipped = false;

  public isGuessed = false;

  public isDisable = false;

  constructor(
    private readonly gameService: GameService,
    private readonly statisticDataService: StatisticsDataService,
  ) {}

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
    this.statisticDataService.getStatistics().subscribe(() => {
      this.isDisable = false;
    });
  }

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
      !this.isGuessed &&
      !this.isDisable
    ) {
      if (!this.isGameMode) {
        this.isDisable = true;
      }
      this.gameService.clickCard(this.cardData);
    }
  }
}
