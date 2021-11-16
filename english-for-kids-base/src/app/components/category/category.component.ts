import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardDataService,
  GameService,
  ModalService,
  SortTableService,
} from 'src/app/services';
import { Category, GameResult } from 'src/app/models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CardsListComponent {
  public category?: Category;

  public isGameMode = false;

  public isStartedGame = false;

  public buttonText = 'Start game';

  public gameResult?: GameResult;

  readonly gameResultModalId = 'game-over-modal';

  constructor(
    private activateRoute: ActivatedRoute,
    private cardDataService: CardDataService,
    private readonly gameService: GameService,
    private readonly modalService: ModalService,
    private readonly router: Router,
    private readonly sortTableService: SortTableService,
  ) {
    this.activateRoute.params.subscribe(params => {
      const id = +params.id;
      this.getCategory(id);
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

  closeModalAfterGame(id: string): void {
    this.modalService.close(id);
  }

  buttonClick(): void {
    if (this.isStartedGame) {
      this.gameService.playWordOfCurrentCard();
    } else {
      this.startGame();
    }
  }

  private getCategory(id: number): void {
    if (id === 0) {
      this.sortTableService.getDifficultWords().subscribe(category => {
        this.category = category;
      });
    } else {
      this.cardDataService.getCategory(id).subscribe(category => {
        this.category = category;
      });
    }
  }

  private startGame(): void {
    if (this.category) {
      this.gameService.startGame(this.category);
    }
  }

  private openModal(id: string): void {
    this.modalService.open(id);
  }
}
