import { BaseComponent } from './components/base-component';
import { ContentField } from './components/content-field/content-field';
import { Game } from './components/content-field/game/game';
import { Header } from './components/header/header';
import { Router } from './components/router/router';

export class App extends BaseComponent {
  private readonly game: Game;

  private readonly contentField: ContentField;

  private readonly router: Router;

  constructor(private readonly root: HTMLElement) {
    super('div', ['application']);
    this.game = new Game();
    this.contentField = new ContentField();
    this.router = new Router(this.contentField.render());
  }

  render(): HTMLElement {
    this.root.appendChild(this.element);
    this.element.appendChild(new Header().render());
    this.element.appendChild(this.contentField.render());
    this.router.route();
    window.addEventListener('hashchange', () => this.router.route());

    return this.element;
  }
}
