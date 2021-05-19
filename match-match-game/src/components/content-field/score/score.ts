import './score.scss';
import { BaseComponent } from '../../base-component';
import { ScoreItem } from './score-item/score-item';

export class Score extends BaseComponent {
  constructor() {
    super('div', ['score']);
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <h2 class="score__title">Best players</h2>
    `;
    return this.element;
  }

  addPlayer(name: string, email: string, img: string, score: number): void {
    this.element.appendChild(new ScoreItem(name, email, img, score).render());
  }
}
