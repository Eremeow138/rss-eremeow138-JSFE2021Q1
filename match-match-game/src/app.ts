import { BaseComponent } from './components/base-component';
import { Router } from './components/router/router';
import { IndexedDB } from './indexed-db';

export class App extends BaseComponent {
  private readonly router: Router;

  private readonly db: IndexedDB;

  constructor(private readonly root: HTMLElement) {
    super('div', ['application']);
    this.db = new IndexedDB('Eremeow138', 'players', 'key');
    this.router = new Router(this.root, this.db);
  }

  render(): HTMLElement {
    this.router.route();
    window.addEventListener('hashchange', () => this.router.route());

    return this.element;
  }
}
