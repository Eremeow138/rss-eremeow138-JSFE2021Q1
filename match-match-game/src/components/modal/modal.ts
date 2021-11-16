import './modal.scss';
import { BaseComponent } from '../base-component';

export class Modal extends BaseComponent {
  private childe: HTMLElement;

  constructor() {
    super('div', ['modal']);
    this.childe = document.createElement('div');
  }

  ShowHiddenModal(): void {
    this.element.classList.toggle('modal_visible');
  }

  addChild(childe: HTMLElement): void {
    this.element.appendChild(childe);
    this.childe = childe;
  }

  render(): HTMLElement {
    this.element.innerHTML = '';
    this.element.appendChild(this.childe);
    return this.element;
  }
}
