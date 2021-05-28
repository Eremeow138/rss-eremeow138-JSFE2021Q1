import './cards-field.scss';
import { BaseComponent } from '../../../base-component';
import { Card } from './card/card';

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  flipToBack(): void {
    this.cards.forEach(card => card.flipToBack());
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach(card => this.element.appendChild(card.element));
  }

  render(): HTMLElement {
    return this.element;
  }
}
