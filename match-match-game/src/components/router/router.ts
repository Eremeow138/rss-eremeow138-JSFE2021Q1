import { BaseComponent } from '../base-component';
import { Game } from '../content-field/game/game';
import { Insruction } from '../content-field/instruction/instruction';
import { PageNotFound } from '../content-field/page-not-found/page-not-found';
import { Score } from '../content-field/score/score';
import { Settings } from '../content-field/settings/settings';

export class Router {
  private hash: string;

  private path: string;

  private readonly routes = [
    { path: '/', component: new Game() },
    { path: '/about-game', component: new Insruction() },
    { path: '/best-score', component: new Score() },
    { path: '/game-settings', component: new Settings() },
  ];

  private component: BaseComponent | undefined;

  private readonly rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.hash = '';
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
}
