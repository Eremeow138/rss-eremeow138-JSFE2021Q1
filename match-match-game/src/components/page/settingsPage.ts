import { ModalServiceImplmentation } from '../../modal-service';
import { Settings } from '../content-field/settings/settings';
import { Header } from '../header/header';
import { Modal } from '../modal/modal';
import { Page } from './page';

export class SettingsPage extends Page {
  constructor(
    readonly modalService: ModalServiceImplmentation,
    readonly modal: Modal,
  ) {
    super();
  }

  render(): HTMLElement {
    this.element.innerHTML = '';
    this.contentField.element.innerHTML = '';
    this.element.appendChild(new Header(this.modalService).render());
    this.contentField.element.appendChild(new Settings().render());
    this.element.appendChild(this.contentField.render());

    this.element.appendChild(this.modal.render());
    this.modalService.cleanCallbacksArray();
    this.modalService.subscribeOnModal(() => {
      this.modal.ShowHiddenModal();
    });
    return this.element;
  }
}
