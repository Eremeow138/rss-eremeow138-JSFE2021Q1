import './content-field.scss';
import { BaseComponent } from '../base-component';
import { Game } from './game/game';

export class ContentField extends BaseComponent {
  private game: Game;

  constructor() {
    super('main', ['content-field']);
    this.game = new Game();
  }

  addGameElements(): void {
    this.element.appendChild(this.game.render());
    this.game.start();
  }

  render(): HTMLElement {
    return this.element;
  }
}
