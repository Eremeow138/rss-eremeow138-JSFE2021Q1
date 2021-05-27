import { Game } from './components/content-field/game/game';
import { Page } from './components/page/page';

export type RootElement = HTMLElement | null;

export type Callback = (routeObj?: RouteObject) => void;

export type CallbackAddRecord = (str?: string) => Promise<string>;
export interface ModalService {
  callAll(): void;

  subscribeOnModal(callback: () => void): void;

  cleanCallbacksArray(): void;
}
export interface RouteObject {
  path: string;
  component: Page | Game;
}
export interface RouterService {
  subscribeOnRouter(callbckName: string, callbck: Callback): void;
  addRoute(route: RouteObject): void;
  reroute(): void;
}
export interface PlayerObject {
  firstName: string;
  lastName: string;
  email: string;
}
