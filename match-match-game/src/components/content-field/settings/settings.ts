import './settings.scss';
import { BaseComponent } from '../../base-component';
import { SettingsItem } from './settings-item';

export class Settings extends BaseComponent {
  constructor() {
    super('div', ['settings']);
  }

  render(): HTMLElement {
    this.element.innerHTML = '';
    this.element.appendChild(
      new SettingsItem('Game cards', 'select game cards type', [
        'Cats',
        'Dogs',
        'Cars',
      ]).render(),
    );
    this.element.appendChild(
      new SettingsItem('Difficulty', 'select game type', [
        '4x4',
        '6x6',
        '8x8',
      ]).render(),
    );
    return this.element;
  }
}
