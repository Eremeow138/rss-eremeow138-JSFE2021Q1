import { ModalServiceImplmentation } from '../../modal-service';
import { BaseComponent } from '../base-component';
import { ContentField } from '../content-field/content-field';
import { Modal } from '../modal/modal';

export class Page extends BaseComponent {
  readonly contentField: ContentField;

  readonly modalService: ModalServiceImplmentation;

  readonly modal: Modal;

  constructor() {
    super('div', ['page']);
    this.contentField = new ContentField();
    this.modalService = new ModalServiceImplmentation();
    this.modal = new Modal();
  }
}
