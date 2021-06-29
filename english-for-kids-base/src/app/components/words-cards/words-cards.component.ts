import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardDataService, GameService } from 'src/app/services';
import { Category } from 'src/app/models';

@Component({
  selector: 'app-words-cards',
  templateUrl: './words-cards.component.html',
  styleUrls: ['./words-cards.component.scss'],
})
export class WordsCardsComponent {
  category?: Category;

  isGameMode = false;

  isStartedGame = false;

  buttonText = 'Start game';

  constructor(
    private activateRoute: ActivatedRoute,
    private cardDataService: CardDataService,
    private readonly gameService: GameService,
  ) {
    this.activateRoute.params.subscribe(params => {
      this.getCategory(params.id);
      this.resetGame();
    });
    this.gameService.getMode().subscribe(mode => {
      this.isGameMode = mode;
      this.resetGame();
    });
  }

  getCategory(id: number): void {
    this.cardDataService.getCategory(id).subscribe(category => {
      this.category = category;
    });
  }

  buttonClick(): void {
    if (this.isStartedGame) {
      this.gameService.playCurrentWord();
    } else {
      this.startGame();
    }
  }

  startGame(): void {
    if (this.category) {
      this.gameService.startGame(this.category);
      this.buttonText = 'Repeat';
      this.isStartedGame = true;
    }
  }

  resetGame(): void {
    this.isStartedGame = false;
    this.buttonText = 'Start game';
  }
}
