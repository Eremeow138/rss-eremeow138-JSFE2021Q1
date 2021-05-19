import './button.scss';
import { BaseComponent } from '../../components/base-component';

export class Button extends BaseComponent {
  private text = '';

  constructor(text: string) {
    super('button', ['button']);
    this.text = text;
  }

  render(): HTMLElement {
    this.element.innerText = this.text;
    return this.element;
  }
}
