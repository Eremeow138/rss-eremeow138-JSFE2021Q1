import './page-not-found.scss';
import { BaseComponent } from '../../base-component';

export class PageNotFound extends BaseComponent {
  constructor() {
    super('main', ['not-found']);
  }

  render(): HTMLElement {
    this.element.innerText = 'Oops, page not found :(';
    return this.element;
  }
}
