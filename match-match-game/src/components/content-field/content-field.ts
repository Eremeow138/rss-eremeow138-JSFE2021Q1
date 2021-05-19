import './content-field.scss';
import { BaseComponent } from '../base-component';
import { Game } from './game/game';
import { Insruction } from './instruction/instruction';

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

  addInstruction(): void {
    this.element.appendChild(new Insruction().render());
  }

  render(): HTMLElement {
    return this.element;
  }
}
