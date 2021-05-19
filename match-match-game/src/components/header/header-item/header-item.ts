import './header-item.scss';
import { BaseComponent } from '../../base-component';

export class HeaderItem extends BaseComponent {
  constructor(classesArr: string[] = ['header__item']) {
    super('div', classesArr);
  }

  render(): HTMLElement {
    return this.element;
  }
}
