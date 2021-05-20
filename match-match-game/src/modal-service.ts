import { Callback, ModalService } from './app.api';

export class ModalServiceImplmentation implements ModalService {
  private readonly callbacks: Callback[];

  constructor() {
    this.callbacks = [];
  }

  callAll(): void {
    this.callbacks.forEach(callback => callback());
  }

  subscribeOnModal(callback: Callback): void {
    this.callbacks.push(callback);
  }
}
