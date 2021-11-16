import './game.scss';
import { delay } from '../../../shared/delay';
import { BaseComponent } from '../../base-component';
import { Card } from './cards-field/card/card';
import { CardsField } from './cards-field/cards-field';
import { ImageCategoryModel } from '../../../models/image-category-model';
import { Timer } from './timer/timer';
import { DataBaseService, ModalService, PlayerObject } from '../../../app.api';
import { DBServiceImplmentation } from '../../../dataBaseService';

const FLIP_DELAY = 500;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  private readonly timer: Timer;

  private score = 0;

  private unresolvedPairs = 0;

  private numberOfCorrectCompare = 0;

  private numberOfIncorrectCompare = 0;

  private numOfPairs = 8;

  private readonly GAME_DELAY = 30;

  private readonly dbService: DataBaseService;

  constructor(
    private readonly modalService: ModalService,
    private readonly changeText: (str: string) => void,
  ) {
    super('div', ['game']);
    this.timer = new Timer();
    this.cardsField = new CardsField();
    this.element.appendChild(this.timer.render());
    this.element.appendChild(this.cardsField.render());
    this.dbService = DBServiceImplmentation.getInstance();
    this.numOfPairs =
      Number(localStorage.getItem('difficultyLvl')?.slice(-1)) ** 2 / 2;
  }

  calcOfPoints(): number {
    const score =
      (this.numberOfCorrectCompare - this.numberOfIncorrectCompare) * 100 -
      this.timer.getTimeInSec() * 10;
    if (score > 0) {
      return score;
    }
    return 0;
  }

  async newGame(images: string[]): Promise<void> {
    this.cardsField.clear();
    this.unresolvedPairs = images.length;
    const cardsMargin = 2;
    const cards = images
      .concat(images)
      .map(url => new Card(url, Math.sqrt(this.numOfPairs * 2), cardsMargin))
      .sort(() => Math.random() - 0.5);
    cards.forEach(card => {
      card.render().addEventListener('click', () => this.cardHandler(card));
    });
    this.cardsField.addCards(cards);
    await this.timer.startTimer(this.GAME_DELAY);
    this.timer.startStopwatch();
    this.cardsField.flipToBack();
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }
    if (this.activeCard.image !== card.image) {
      this.activeCard.element.classList.add('wrong');
      card.element.classList.add('wrong');
      await delay(FLIP_DELAY);
      await Promise.all([
        this.activeCard.flipToBack(),
        await card.flipToBack(),
      ]);
      this.numberOfIncorrectCompare++;
    }
    if (this.activeCard.image === card.image) {
      this.activeCard.element.classList.add('correct');
      card.element.classList.add('correct');
      this.unresolvedPairs -= 1;
      this.numberOfCorrectCompare++;
    }

    this.activeCard = undefined;
    this.isAnimation = false;
    if (this.unresolvedPairs === 0) {
      this.timer.stopTimer();
      this.score = this.calcOfPoints();

      const lsData = localStorage.getItem('playerData');

      if (lsData) {
        const playerObj: PlayerObject = JSON.parse(lsData);
        playerObj.score = this.score;
        const prom: Promise<string> | void = this.dbService.addRecord(
          JSON.stringify(playerObj),
        );
        prom.then(
          () => {
            this.modalService.callAll();
            let min = String(Math.trunc(this.timer.getTimeInSec() / 60));
            let sec = String(Math.trunc(this.timer.getTimeInSec() % 60));
            if (min.length === 1) {
              min = `0${min}`;
            }
            if (sec.length === 1) {
              sec = `0${sec}`;
            }
            this.changeText(
              `Congratulations! You successfully found all matches on ${min}:${sec} minutes.`,
            );
          },
          err => {
            this.changeText(`Error ${err}`);
          },
        );
      }
    }
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    let cat = categories.find(
      item => item.category === localStorage.getItem('category'),
    );
    if (!cat) {
      [cat] = categories;
    }
    if (!this.numOfPairs) {
      this.numOfPairs = cat.images.length;
    }
    const images: string[] = [];

    for (let i = 0; i < this.numOfPairs; i++) {
      images.push(`${cat.category}/${cat.images[i]}`);
    }
    this.newGame(images);
  }

  render(): HTMLElement {
    this.start();
    return this.element;
  }
}
