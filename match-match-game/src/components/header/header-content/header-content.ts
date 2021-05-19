import './header-content.scss';
import { BaseComponent } from '../../base-component';
import { HeaderItem } from '../header-item/header-item';
import { Nav } from '../header-item/nav/nav';
import { Logo } from '../header-item/logo/logo';
import { Button } from '../../../shared/button/button';
import { Avatar } from '../header-item/avatar/avatar';
import avatar from '../../../assets/avatar-default.svg';

export class HeaderContent extends BaseComponent {
  constructor() {
    super('header', ['header__content']);
  }

  render(): HTMLElement {
    this.element
      .appendChild(new HeaderItem().render())
      .appendChild(new Logo('Match').render());

    this.element
      .appendChild(
        new HeaderItem(['header__item', 'header__item_grow']).render(),
      )
      .appendChild(new Nav().render());

    this.element
      .appendChild(new HeaderItem().render())
      .append(new Button('stop game').render(), new Avatar(avatar).render());
    return this.element;
  }
}
