import './avatar.scss';
import { BaseComponent } from '../../../base-component';

export class Avatar extends BaseComponent {
  private src = '';

  constructor(src: string) {
    super('img', ['avatar']);
    this.src = src;
  }

  render(): HTMLElement {
    this.element.setAttribute('src', this.src);
    return this.element;
  }
}
