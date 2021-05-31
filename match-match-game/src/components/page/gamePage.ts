import { RouterService } from '../../app.api';
import { ModalServiceImplmentation } from '../../modal-service';
import { Game } from '../content-field/game/game';
import { Header } from '../header/header';
import { Congratulation } from '../modal/congratulation/congratulation';
import { Modal } from '../modal/modal';
import { Page } from './page';

export class GamePage extends Page {
  private readonly congratulation: Congratulation;

  constructor(
    readonly modalService: ModalServiceImplmentation,
    readonly modal: Modal,
    readonly routerService: RouterService,
  ) {
    super();
    this.congratulation = new Congratulation(
      'Congratulations! You successfully found all matches on 1.21 minutes.',
      this.modalService,
    );
  }

  render(): HTMLElement {
    this.modal.addChild(this.congratulation.render());
    this.element.innerHTML = '';
    this.contentField.element.innerHTML = '';
    this.element.appendChild(
      new Header(this.modalService, this.routerService).render(),
    );
    this.contentField.element.appendChild(
      new Game(this.modalService, text => {
        this.congratulation.changeText(text);
      }).render(),
    );
    this.element.appendChild(this.contentField.render());
    this.element.appendChild(this.modal.render());
    this.modalService.cleanCallbacksArray();
    this.modalService.subscribeOnModal(() => {
      this.modal.ShowHiddenModal();
    });
    return this.element;
  }
}
