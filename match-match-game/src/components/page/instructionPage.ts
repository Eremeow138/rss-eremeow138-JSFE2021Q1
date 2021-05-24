import { Insruction } from '../content-field/instruction/instruction';
import { Header } from '../header/header';
import { Page } from './page';

export class InstructionPage extends Page {
  render(): HTMLElement {
    this.element.innerHTML = '';
    this.contentField.element.innerHTML = '';
    this.element.appendChild(new Header(this.modalService).render());
    this.contentField.element.appendChild(new Insruction().render());
    this.element.appendChild(this.contentField.render());
    this.element.appendChild(this.modal.renderRegistration());
    this.modalService.subscribeOnModal(() => {
      this.modal.ShowHiddenModal();
    });
    return this.element;
  }
}
