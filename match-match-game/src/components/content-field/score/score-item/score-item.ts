import { BaseComponent } from '../../../base-component';

export class ScoreItem extends BaseComponent {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly img: string,
    private readonly score: number,
  ) {
    super('div', ['score__item']);
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <div class="score__player">
        <img src="${this.img}" class="score__avatar"></img>
        <div class="score__contact">
          <div class="score__name">${this.name}</div>
          <div class="score__email">${this.email}</div>
        </div>
      </div>
      <div class="score__score">Score: <span class="score__number">${this.score}</span></div>
    `;

    return this.element;
  }
}
