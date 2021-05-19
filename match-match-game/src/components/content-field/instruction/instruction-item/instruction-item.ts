import { BaseComponent } from '../../../base-component';

export class InsructionItem extends BaseComponent {
  constructor(
    private readonly number: number,
    private readonly text: string,
    private readonly img: string,
  ) {
    super('div', ['instruction__item']);
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <div class="instruction__description">
        <div class="instruction__number">${this.number}</div>
        ${this.text}
      </div>
      <img src="${this.img}" class="instruction__img"></img>
    `;

    return this.element;
  }
}
