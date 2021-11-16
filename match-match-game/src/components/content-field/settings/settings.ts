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
      new SettingsItem(
        'Game cards',
        localStorage.getItem('category') || 'select game cards type',
        ['cats', 'cars'],
        'category',
      ).render(),
    );
    this.element.appendChild(
      new SettingsItem(
        'Difficulty',
        localStorage.getItem('difficultyLvl') || 'select game type',
        ['4x4', '6x6'],
        'difficultyLvl',
      ).render(),
    );
    return this.element;
  }
}
