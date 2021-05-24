import './modal.scss';
import { BaseComponent } from '../base-component';
import { Registration } from './registration/registration';

export class Modal extends BaseComponent {
  constructor() {
    super('div', ['modal']);
  }

  ShowHiddenModal(): void {
    this.element.classList.toggle('modal_visible');
  }

  renderRegistration(): HTMLElement {
    this.element.appendChild(
      new Registration(this.ShowHiddenModal.bind(this)).render(),
    );
    return this.element;
  }
}
