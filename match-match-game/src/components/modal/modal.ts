import './modal.scss';
import { BaseComponent } from '../base-component';

export class Modal extends BaseComponent {
  constructor(private readonly childe: HTMLElement) {
    super('div', ['modal']);
  }

  ShowHiddenModal(): void {
    this.element.classList.toggle('modal_visible');
  }

  render(): HTMLElement {
    this.element.innerHTML = '';
    this.element.appendChild(this.childe);
    return this.element;
  }
}
