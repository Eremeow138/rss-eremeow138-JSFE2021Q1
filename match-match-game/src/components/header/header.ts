import './header.scss';
import { BaseComponent } from '../base-component';
import { HeaderContent } from './header-content/header-content';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
  }

  render(): HTMLElement {
    this.element.appendChild(new HeaderContent().render());
    return this.element;
  }
}
