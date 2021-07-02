import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Category, GameResult, Word } from '../models';

function shuffle(initialArray: Word[]): Word[] {
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
  private isGameMode: BehaviorSubject<boolean>;

  private readonly audio: HTMLAudioElement;

  private wordsForGame: Word[] = [];

  private currentWord: Word | undefined = undefined;

  private guessedWord: Subject<string>;

  private readonly isGameStarted: BehaviorSubject<boolean>;

  private readonly starLinks: BehaviorSubject<string[]>;

  private numberOfErrors = 0;

  private readonly errorImage = 'assets/img/failure.jpg';

  private readonly successImage = 'assets/img/success.jpg';

  private readonly gameResult: Subject<GameResult>;

  constructor(private readonly location: Location) {
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

  playCurrentWord(): void {
    this.play(this.currentWord?.audioSrc);
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
    this.wordsForGame = shuffle(category.words);
    this.nextWord();
    this.playCurrentWord();
  }

  nextWord(): void {
    this.currentWord = this.wordsForGame.pop();
  }

  clickCard(word: Word): void {
    if (this.isGameMode.getValue()) {
      if (this.isGameStarted.getValue()) {
        if (word.word === this.currentWord?.word) {
          this.successAnswer();
        } else {
          this.wrongAnswer();
        }
      }
    } else {
      this.play(word.audioSrc);
    }
  }

  successAnswer(): void {
    this.guessedWord.next(this.currentWord?.word);
    this.addStarLink('assets/img/star-win.svg');
    this.play('assets/audio/correct.mp3').then(() => {
      setTimeout(() => {
        if (this.wordsForGame.length > 0) {
          this.nextWord();
          this.playCurrentWord();
        } else {
          this.gameOver();
        }
      }, 1000);
    });
  }

  wrongAnswer(): void {
    this.numberOfErrors++;
    this.addStarLink('assets/img/star.svg');
    this.play('assets/audio/error.mp3');
  }

  gameOver(): void {
    const { numberOfErrors } = this;
    const image = numberOfErrors > 0 ? this.errorImage : this.successImage;
    this.gameResult.next({ numberOfErrors, image });
    this.numberOfErrors = 0;
    this.cleanStarLinks();
  }
}
