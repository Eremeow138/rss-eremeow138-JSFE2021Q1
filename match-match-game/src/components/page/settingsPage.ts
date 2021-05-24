import { Settings } from '../content-field/settings/settings';
import { Header } from '../header/header';
import { Page } from './page';

export class SettingsPage extends Page {
  render(): HTMLElement {
    this.element.innerHTML = '';
    this.contentField.element.innerHTML = '';
    this.element.appendChild(new Header(this.modalService).render());
    this.contentField.element.appendChild(new Settings().render());
    this.element.appendChild(this.contentField.render());
    return this.element;
  }
}
