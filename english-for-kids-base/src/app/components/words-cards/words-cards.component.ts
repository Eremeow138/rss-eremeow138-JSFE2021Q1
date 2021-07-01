import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardDataService, GameService, ModalService } from 'src/app/services';
import { Category, GameResult } from 'src/app/models';

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

  gameResult?: GameResult;

  gameResultModalId = 'game-over-modal';

  constructor(
    private activateRoute: ActivatedRoute,
    private cardDataService: CardDataService,
    private readonly gameService: GameService,
    private readonly modalService: ModalService,
    private readonly router: Router,
  ) {
    this.activateRoute.params.subscribe(params => {
      this.getCategory(params.id);
    });
    this.gameService.getMode().subscribe(mode => {
      this.isGameMode = mode;
    });
    this.gameService.getStatusOfStartGame().subscribe(status => {
      this.isStartedGame = status;
      this.buttonText = status ? 'Repeat' : 'Start game';
    });
    this.gameService.getGameResult().subscribe(gameResult => {
      this.gameResult = gameResult;
      this.openModal(this.gameResultModalId);
    });
    this.modalService.modalHasBeenClosed().subscribe(modalId => {
      if (modalId === this.gameResultModalId) {
        this.router.navigateByUrl('main');
      }
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
    }
  }

  openModal(id: string): void {
    this.modalService.open(id);
  }

  closeModalAfterGame(id: string): void {
    this.modalService.close(id);
  }
}
