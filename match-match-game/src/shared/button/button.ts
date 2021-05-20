import './button.scss';
import { BaseComponent } from '../../components/base-component';
import { Callback } from '../../app.api';

export class Button extends BaseComponent {
  constructor(private text = '', private callback: Callback) {
    super('button', ['button']);
    this.text = text;
  }

  render(): HTMLElement {
    this.element.innerText = this.text;
    this.element.addEventListener('click', this.callback);
    return this.element;
  }
}
