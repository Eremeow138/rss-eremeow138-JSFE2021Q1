import './button.scss';
import { BaseComponent } from '../../components/base-component';
import { Callback } from '../../app.api';

export class Button extends BaseComponent {
  constructor(
    private text = '',
    private callback?: Callback,
    private type?: string,
  ) {
    super('button', ['button']);
    this.text = text;
    if (this.callback) {
      this.element.addEventListener('click', () => {
        if (this.callback) {
          this.callback();
        }
      });
    }
  }

  render(): HTMLElement {
    if (this.type) {
      this.element.setAttribute('type', this.type);
    }

    this.element.innerText = this.text;

    return this.element;
  }
}
