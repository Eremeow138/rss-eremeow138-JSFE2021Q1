import './header.scss';
import { BaseComponent } from '../base-component';
import { HeaderContent } from './header-content/header-content';
import { ModalService } from '../../app.api';

export class Header extends BaseComponent {
  constructor(private readonly modalService: ModalService) {
    super('header', ['header']);
  }

  render(): HTMLElement {
    this.element.appendChild(new HeaderContent(this.modalService).render());
    return this.element;
  }
}
