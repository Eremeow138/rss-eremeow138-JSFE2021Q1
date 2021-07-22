import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Category, GameResult, CardData, WordStatistics } from '../models';
import { StatisticsDataService } from './statistics-data.service';

function shuffle(initialArray: CardData[]): CardData[] {
  const array = initialArray.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameStatisticsForCurrentGame: WordStatistics[] = [];

  private isGameMode: BehaviorSubject<boolean>;

  private cardsForGame: CardData[] = [];

  private currentCard: CardData | undefined = undefined;

  private guessedWord: Subject<string>;

  private numberOfErrors = 0;

  private readonly audio: HTMLAudioElement;

  private readonly isGameStarted: BehaviorSubject<boolean>;

  private readonly starLinks: BehaviorSubject<string[]>;

  private readonly errorImage = 'assets/img/failure.jpg';

  private readonly successImage = 'assets/img/success.jpg';

  private readonly successAudio = 'assets/audio/success.mp3';

  private readonly failureAudio = 'assets/audio/failure.mp3';

  private readonly rightAnswerImage = 'assets/img/star-win.svg';

  private readonly rightAnswerAudio = 'assets/audio/correct.mp3';

  private readonly wrongAnswerAudio = 'assets/audio/error.mp3';

  private readonly wrongAnswerImage = 'assets/img/star.svg';

  private readonly gameResult: Subject<GameResult>;

  constructor(
    private readonly location: Location,
    private readonly statisticsDataService: StatisticsDataService,
  ) {
    this.audio = new Audio();
    this.isGameMode = new BehaviorSubject<boolean>(false);
    this.guessedWord = new Subject<string>();
    this.isGameStarted = new BehaviorSubject<boolean>(false);
    this.starLinks = new BehaviorSubject<string[]>([]);
    this.gameResult = new Subject<GameResult>();
    this.location.onUrlChange(() => {
      this.setStatusOfStartGame(false);
      this.cleanStarLinks();
    });
    this.getMode().subscribe(mode => {
      if (mode === false) {
        this.cleanStarLinks();
        this.isGameStarted.next(false);
        this.numberOfErrors = 0;
      }
    });
  }

  getStatusOfStartGame(): Observable<boolean> {
    return this.isGameStarted.asObservable();
  }

  setStatusOfStartGame(status: boolean): void {
    this.isGameStarted.next(status);
  }

  getStarLinks(): Observable<string[]> {
    return this.starLinks.asObservable();
  }

  getGameResult(): Observable<GameResult> {
    return this.gameResult.asObservable();
  }

  addStarLink(link: string): void {
    const currentStarLinks = this.starLinks.getValue();
    this.starLinks.next([...currentStarLinks, link]);
  }

  cleanStarLinks(): void {
    this.starLinks.next([]);
  }

  play(src: string | undefined): Promise<void> {
    if (src) {
      this.audio.src = src;
      this.audio.load();
      return this.audio.play();
    }
    return new Promise<void>(() => {});
  }

  playWordOfCurrentCard(): void {
    this.play(this.currentCard?.audioSrc);
  }

  getMode(): Observable<boolean> {
    return this.isGameMode.asObservable();
  }

  getGuessedWord(): Observable<string> {
    return this.guessedWord.asObservable();
  }

  switchMode(): void {
    this.isGameMode.next(!this.isGameMode.getValue());
  }

  startGame(category: Category): void {
    this.setStatusOfStartGame(true);
    this.cardsForGame = shuffle(category.cards);
    this.initialGameStatisticsForCurrentGame(this.cardsForGame);
    this.nextCard();
    this.playWordOfCurrentCard();
  }

  nextCard(): void {
    this.currentCard = this.cardsForGame.pop();
  }

  clickCard(card: CardData): void {
    if (this.isGameMode.getValue()) {
      if (this.isGameStarted.getValue()) {
        if (card.word === this.currentCard?.word) {
          this.successAnswer();
        } else {
          this.wrongAnswer();
        }
      }
    } else {
      this.statisticsDataService.updateTrainClickById(card.id);
      this.play(card.audioSrc);
    }
  }

  successAnswer(): void {
    if (this.currentCard) {
      this.guessedWord.next(this.currentCard.word);
      this.addRightClickToGameStatisticsForCurrentGame(this.currentCard.id);
    }

    this.addStarLink(this.rightAnswerImage);
    this.play(this.rightAnswerAudio).then(() => {
      setTimeout(() => {
        if (this.cardsForGame.length > 0) {
          this.nextCard();
          this.playWordOfCurrentCard();
        } else {
          this.gameOver();
        }
      }, 1000);
    });
  }

  wrongAnswer(): void {
    this.numberOfErrors++;
    if (this.currentCard) {
      this.addWrongClickToGameStatisticsForCurrentGame(this.currentCard.id);
    }
    this.addStarLink(this.wrongAnswerImage);
    this.play(this.wrongAnswerAudio);
  }

  gameOver(): void {
    this.statisticsDataService.updateStatisticAfterGame(
      this.gameStatisticsForCurrentGame,
    );
    const { numberOfErrors } = this;
    const image = numberOfErrors > 0 ? this.errorImage : this.successImage;
    const audioSrc = numberOfErrors > 0 ? this.failureAudio : this.successAudio;
    this.gameResult.next({ numberOfErrors, image });
    this.play(audioSrc);
    this.numberOfErrors = 0;
    this.cleanStarLinks();
  }

  initialGameStatisticsForCurrentGame(cardData: CardData[]): void {
    this.gameStatisticsForCurrentGame = cardData.map(item => {
      return {
        id: item.id,
        trainClicks: 0,
        wasGuessed: 0,
        errors: 0,
      };
    });
  }

  addWrongClickToGameStatisticsForCurrentGame(targetId: string): void {
    const currentStatistic = this.gameStatisticsForCurrentGame.slice(0);
    this.gameStatisticsForCurrentGame = currentStatistic.map(item => {
      const { id, trainClicks, wasGuessed, errors } = item;
      const updatedErrors = errors + 1;
      return id === targetId
        ? { id, trainClicks, wasGuessed, errors: updatedErrors }
        : item;
    });
  }

  addRightClickToGameStatisticsForCurrentGame(targetId: string): void {
    const currentStatistic = this.gameStatisticsForCurrentGame.slice(0);
    this.gameStatisticsForCurrentGame = currentStatistic.map(item => {
      const { id, trainClicks, wasGuessed, errors } = item;
      const updatedWasGuessed = wasGuessed + 1;
      return id === targetId
        ? { id, trainClicks, wasGuessed: updatedWasGuessed, errors }
        : item;
    });
  }
}
