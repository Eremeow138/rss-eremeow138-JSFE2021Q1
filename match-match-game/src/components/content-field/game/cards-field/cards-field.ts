import './cards-field.scss';
import { BaseComponent } from '../../../base-component';
import { Card } from './card/card';

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  private readonly cardBox: BaseComponent;

  constructor() {
    super('div', ['cards-field']);
    this.cardBox = new BaseComponent('div', ['card-box']);
  }

  clear(): void {
    this.cards = [];
    this.cardBox.element.innerHTML = '';
  }

  flipToBack(): void {
    this.cards.forEach(card => card.flipToBack());
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach(card => this.cardBox.element.appendChild(card.element));
  }

  render(): HTMLElement {
    this.element.appendChild(this.cardBox.element);
    return this.element;
  }
}
