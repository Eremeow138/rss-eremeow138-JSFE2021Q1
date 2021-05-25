export type RootElement = HTMLElement | null;
export type Callback = () => void;
export type CallbackAddRecord = (str?: string) => Promise<string>;
export interface ModalService {
  callAll(): void;

  subscribeOnModal(callback: () => void): void;

  cleanCallbacksArray(): void;
}
export interface RouterService {
  subscribeOnRouter(callbckName: string, callbck: Callback): void;
  reroute(): void;
}
export interface PlayerObject {
  firstName: string;
  lastName: string;
  email: string;
}
