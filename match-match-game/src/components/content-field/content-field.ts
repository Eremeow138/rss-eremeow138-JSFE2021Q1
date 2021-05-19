import './content-field.scss';
import { BaseComponent } from '../base-component';

export class ContentField extends BaseComponent {
  constructor() {
    super('main', ['content-field']);
  }

  render(): HTMLElement {
    return this.element;
  }
}
