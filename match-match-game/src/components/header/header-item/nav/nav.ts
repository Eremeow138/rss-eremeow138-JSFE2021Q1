import './nav.scss';
import { BaseComponent } from '../../../base-component';
import { NavItem } from './nav-item/nav-item';

import star from '../../../../assets/icons/star.svg';
import gear from '../../../../assets/icons/gear.svg';
import question from '../../../../assets/icons/question.svg';

export class Nav extends BaseComponent {
  constructor() {
    super('nav', ['nav']);
  }

  render(): HTMLElement {
    this.element.appendChild(new NavItem(`${question}`, 'About Game').render());
    this.element.appendChild(
      new NavItem(`${star}`, 'Best Score', ['nav__icon_inverse']).render(),
    );
    this.element.appendChild(new NavItem(`${gear}`, 'Game Settings').render());
    return this.element;
  }
}
