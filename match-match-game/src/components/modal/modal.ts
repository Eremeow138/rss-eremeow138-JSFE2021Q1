import './modal.scss';
import { BaseComponent } from '../base-component';
import { Registration } from './registration/registration';
import { CallbackAddRecord } from '../../app.api';

export class Modal extends BaseComponent {
  constructor(private addRecord: CallbackAddRecord) {
    super('div', ['modal']);
  }

  ShowHiddenModal(): void {
    this.element.classList.toggle('modal_visible');
  }

  render(): HTMLElement {
    this.element.appendChild(
      new Registration(
        this.ShowHiddenModal.bind(this),
        this.addRecord,
      ).render(),
    );
    return this.element;
  }
}
