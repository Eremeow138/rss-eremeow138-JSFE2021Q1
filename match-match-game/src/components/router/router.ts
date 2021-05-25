import { BaseComponent } from '../base-component';
import { Game } from '../content-field/game/game';
import { PageNotFound } from '../content-field/page-not-found/page-not-found';
import { Page } from '../page/page';

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

  constructor(rootElement: HTMLElement, routes: RouteObject[]) {
    this.rootElement = rootElement;
    this.hash = '';
    this.routes = routes;
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

  addRoute(route: RouteObject): void {
    this.routes.push(route);
  }
}
