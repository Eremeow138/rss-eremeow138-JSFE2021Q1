import { BaseComponent } from '../base-component';
import { ContentField } from '../content-field/content-field';

export class Page extends BaseComponent {
  readonly contentField: ContentField;

  constructor() {
    super('div', ['page']);
    this.contentField = new ContentField();
  }
}
