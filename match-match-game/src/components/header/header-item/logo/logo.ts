import './logo.scss';
import { BaseComponent } from '../../../base-component';

export class Logo extends BaseComponent {
  private text = '';

  constructor(text: string) {
    super('div', ['logo']);
    this.text = text;
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <div class="logo__item">${this.text}</div>
      <div class="logo__item logo__item_fill">${this.text}</div>
    `;
    return this.element;
  }
}
