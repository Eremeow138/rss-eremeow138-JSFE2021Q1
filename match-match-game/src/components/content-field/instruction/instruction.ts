import './instruction.scss';
import { BaseComponent } from '../../base-component';
import { InsructionItem } from './instruction-item/instruction-item';
import regImage from '../../../assets/registration.jpg';
import gameSettingsImage from '../../../assets/game-settings.jpg';
import gameImage from '../../../assets/game.jpg';

export class Insruction extends BaseComponent {
  constructor() {
    super('div', ['instruction']);
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <h2 class="instruction__title">How to play?</h2>
    `;
    this.element.appendChild(
      new InsructionItem(1, 'Register new player in game', regImage).render(),
    );
    this.element.appendChild(
      new InsructionItem(
        2,
        'Configure your game settings',
        gameSettingsImage,
      ).render(),
    );
    this.element.appendChild(
      new InsructionItem(
        3,
        'Start you new game! Remember card positions and match it before times up.',
        gameImage,
      ).render(),
    );
    return this.element;
  }
}
