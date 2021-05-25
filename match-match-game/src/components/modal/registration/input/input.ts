import { Callback } from '../../../../app.api';
import { BaseComponent } from '../../../base-component';

export class Input extends BaseComponent {
  // private readonly element: HTMLInputElement;

  private stateValid: boolean;

  private message: HTMLElement;

  private input: HTMLInputElement;

  constructor(
    private readonly name: string,
    private readonly placeholder: string,
    private readonly regExp: RegExp,
    private readonly errMessage: string,
    private readonly callback: Callback,
  ) {
    super('div', ['registration__input-field']);
    this.input = document.createElement('input');
    this.input.classList.add('registration__input');
    this.message = new BaseComponent('div', ['registration__message']).render();
    this.message.textContent = this.errMessage;
    this.element.appendChild(this.input);
    this.element.appendChild(this.message);
    this.stateValid = false;
  }

  validation(regExp: RegExp): void {
    if (regExp.test(this.input.value)) {
      this.element.classList.remove('invalid');
      this.element.classList.add('valid');
      this.stateValid = true;
    } else {
      this.element.classList.remove('valid');
      this.element.classList.add('invalid');
      this.stateValid = false;
    }
    this.callback();
  }

  clear(): void {
    this.element.classList.remove('valid');
    this.element.classList.remove('invalid');
    this.input.value = '';
    this.stateValid = false;
  }

  getStatusValidation(): boolean {
    return this.stateValid;
  }

  render(): HTMLElement {
    this.input.setAttribute('name', this.name);
    this.input.setAttribute('placeholder', this.placeholder);
    this.input.addEventListener('input', () => this.validation(this.regExp));
    return this.element;
  }
}
