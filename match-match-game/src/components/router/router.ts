import { IndexedDB } from '../../indexed-db';
import { BaseComponent } from '../base-component';
import { Game } from '../content-field/game/game';
import { PageNotFound } from '../content-field/page-not-found/page-not-found';
import { InstructionPage } from '../page/instructionPage';
import { Page } from '../page/page';
import { ScorePage } from '../page/scorePage';
import { SettingsPage } from '../page/settingsPage';

interface RouteObject {
  path: string;
  component: Page | Game;
}
export class Router {
  private hash: string;

  private path: string;

  private routes: RouteObject[] = [];

  private component: BaseComponent | undefined;

  private readonly rootElement: HTMLElement;

  constructor(rootElement: HTMLElement, db: IndexedDB) {
    this.rootElement = rootElement;
    this.hash = '';
    this.routes.push({ path: '/', component: new InstructionPage() });
    this.routes.push({ path: '/best-score', component: new ScorePage() });
    this.routes.push({ path: '/game-settings', component: new SettingsPage() });
    this.path = this.parseLocation();
    this.component = this.findComponentByPath();
  }

  parseLocation(): string {
    this.hash = window.location.hash.slice(1).toLowerCase() || '/';
    return this.hash;
  }

  findComponentByPath(): BaseComponent | undefined {
    const route = this.routes.find(r =>
      r.path.match(new RegExp(`^\\${this.path}$`, 'gm')),
    );
    if (route) {
      return route.component;
    }
    return undefined;
  }

  route(): void {
    this.path = this.parseLocation();
    this.component = this.findComponentByPath();
    this.rootElement.innerHTML = '';
    if (this.component) {
      this.rootElement.appendChild(this.component.render());
    } else {
      this.rootElement.appendChild(new PageNotFound().render());
    }
  }

  addRouteToGame(): void {
    this.routes.push({ path: '/game', component: new Game() });
  }
}