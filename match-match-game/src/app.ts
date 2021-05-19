import { BaseComponent } from './components/base-component';
import { ContentField } from './components/content-field/content-field';
import { Game } from './components/content-field/game/game';
import { Header } from './components/header/header';

export class App extends BaseComponent {
  private readonly game: Game;

  private readonly contentField: ContentField;

  constructor(private readonly root: HTMLElement) {
    super('div', ['application']);
    this.game = new Game();
    this.contentField = new ContentField();
  }

  render(): HTMLElement {
    this.root.appendChild(this.element);
    this.element.appendChild(new Header().render());
    this.contentField.addInstruction();
    this.element.appendChild(this.contentField.render());
    return this.element;
  }
}
