export type RootElement = HTMLElement | null;
export type Callback = () => void;
export interface ModalService {
  callAll(): void;

  subscribeOnModal(callback: () => void): void;
}
