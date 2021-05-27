import './header.scss';
import { BaseComponent } from '../base-component';
import { HeaderContent } from './header-content/header-content';
import { ModalService, RouterService } from '../../app.api';

export class Header extends BaseComponent {
  constructor(
    private readonly modalService: ModalService,
    private readonly routerService: RouterService,
  ) {
    super('header', ['header']);
  }

  render(): HTMLElement {
    this.element.appendChild(
      new HeaderContent(this.modalService, this.routerService).render(),
    );
    return this.element;
  }
}
