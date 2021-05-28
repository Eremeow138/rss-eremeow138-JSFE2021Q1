import './game.scss';
import { delay } from '../../../shared/delay';
import { BaseComponent } from '../../base-component';
import { Card } from './cards-field/card/card';
import { CardsField } from './cards-field/cards-field';
import { ImageCategoryModel } from '../../../models/image-category-model';
import { Timer } from './timer/timer';

const FLIP_DELAY = 2000;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  private readonly timer: Timer;

  private score = 0;

  private unresolvedPairs = 0;

  private numberOfCorrectCompare = 0;

  private numberOfIncorrectCompare = 0;

  private readonly GAME_DELAY = 10;

  constructor() {
    super('div', ['game']);
    this.timer = new Timer();
    this.cardsField = new CardsField();
    this.element.appendChild(this.timer.render());
    this.element.appendChild(this.cardsField.render());
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
    const cards = images
      .concat(images)
      .map(url => new Card(url))
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
      alert(`score: ${this.score}`);
    }
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.newGame(images);
  }

  render(): HTMLElement {
    this.start();
    return this.element;
  }
}
