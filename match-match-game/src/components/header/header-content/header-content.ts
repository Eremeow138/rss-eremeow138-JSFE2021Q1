import './header-content.scss';
import { BaseComponent } from '../../base-component';
import { HeaderItem } from '../header-item/header-item';
import { Nav } from '../header-item/nav/nav';
import { Logo } from '../header-item/logo/logo';
import { Button } from '../../../shared/button/button';
import { Avatar } from '../header-item/avatar/avatar';
import avatar from '../../../assets/avatar-default.svg';
import { ModalService, PlayerObject, RouterService } from '../../../app.api';

export class HeaderContent extends BaseComponent {
  private playerStringData: string | null = null;

  constructor(
    private readonly modalService: ModalService,
    private readonly routerService: RouterService,
  ) {
    super('header', ['header__content']);
  }

  getAvatarFromLS(): string | null {
    let playerObj: PlayerObject | null;
    this.playerStringData = localStorage.getItem('playerData');
    if (this.playerStringData) {
      playerObj = JSON.parse(this.playerStringData);
    } else {
      playerObj = null;
    }
    if (playerObj) {
      return playerObj.avatar;
    }
    return null;
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

    if (localStorage.getItem('playerData')) {
      if (window.location.hash === '#/game') {
        this.element.appendChild(new HeaderItem().render()).append(
          new Button('Stop game', () => {
            window.location.hash = '/';
          }).render(),
          new Button('Logout', () => {
            localStorage.removeItem('playerData');
            if (window.location.hash === '#/game') {
              window.location.hash = '#/';
            } else {
              this.routerService.reroute();
            }
          }).render(),
          new Avatar(this.getAvatarFromLS() || avatar).render(),
        );
      } else {
        this.element.appendChild(new HeaderItem().render()).append(
          new Button('Start game', () => {
            window.location.hash = '#/game';
          }).render(),
          new Button('Logout', () => {
            localStorage.removeItem('playerData');
            if (window.location.hash === '#/game') {
              window.location.hash = '#/';
            } else {
              this.routerService.reroute();
            }
          }).render(),
          new Avatar(this.getAvatarFromLS() || avatar).render(),
        );
      }
    } else {
      this.element
        .appendChild(new HeaderItem().render())
        .append(
          new Button('Register new player', () =>
            this.modalService.callAll(),
          ).render(),
          new Avatar(this.getAvatarFromLS() || avatar).render(),
        );
    }

    return this.element;
  }
}
