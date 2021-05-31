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
  component: Page;
}
export interface RouterService {
  subscribeOnRouter(callbckName: string, callbck: Callback): void;
  addRoute(route: RouteObject): void;
  reroute(): void;
}
export interface DataBaseService {
  subscribeOnDB(callbckName: string, callbck: () => void): void;
  addRecord(jsonStringData: string): Promise<string>;
  getRecords(limit?: number): Promise<PlayerObject[]>;
}
export interface PlayerObject {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
}
