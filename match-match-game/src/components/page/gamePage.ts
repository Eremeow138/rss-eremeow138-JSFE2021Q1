import { RouterService } from '../../app.api';
import { ModalServiceImplmentation } from '../../modal-service';
import { Game } from '../content-field/game/game';
import { Insruction } from '../content-field/instruction/instruction';
import { Header } from '../header/header';
import { Modal } from '../modal/modal';
import { Page } from './page';

export class GamePage extends Page {
  constructor(
    readonly modalService: ModalServiceImplmentation,
    readonly modal: Modal,
    readonly routerService: RouterService,
  ) {
    super();
  }

  render(): HTMLElement {
    this.element.innerHTML = '';
    this.contentField.element.innerHTML = '';
    this.element.appendChild(
      new Header(this.modalService, this.routerService).render(),
    );
    this.contentField.element.appendChild(new Game().render());
    this.element.appendChild(this.contentField.render());
    this.element.appendChild(this.modal.render());
    this.modalService.cleanCallbacksArray();
    this.modalService.subscribeOnModal(() => {
      this.modal.ShowHiddenModal();
    });
    return this.element;
  }
}
