import './game.scss';
import { delay } from '../../../shared/delay';
import { BaseComponent } from '../../base-component';
import { Card } from './cards-field/card/card';
import { CardsField } from './cards-field/cards-field';
import { ImageCategoryModel } from '../../../models/image-category-model';

const FLIP_DELAY = 2000;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('div', ['game']);
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.render());
  }

  newGame(images: string[]): void {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map(url => new Card(url))
      .sort(() => Math.random() - 0.5);
    cards.forEach(card => {
      card.render().addEventListener('click', () => this.cardHandler(card));
    });
    this.cardsField.addCards(cards);
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
      await delay(FLIP_DELAY);
      await Promise.all([
        this.activeCard.flipToBack(),
        await card.flipToBack(),
      ]);
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.newGame(images);
  }

  render(): HTMLElement {
    return this.element;
  }
}
