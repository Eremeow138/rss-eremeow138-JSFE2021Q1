import { Callback, RouterService } from './app.api';

interface CallbackAndName {
  callbackName: string;
  callback: Callback;
}
export class RouterServiceImplmentation implements RouterService {
  private callbacksAndNames: CallbackAndName[];

  constructor() {
    this.callbacksAndNames = [];
  }

  subscribeOnRouter(callbckName: string, callbck: Callback): void {
    this.callbacksAndNames.push({
      callbackName: callbckName,
      callback: callbck,
    });
  }

  reroute(): void {
    const callbackObj = this.callbacksAndNames.find(r =>
      r.callbackName.match(/^reroute$/),
    );
    if (callbackObj) {
      callbackObj.callback();
    }
    return undefined;
  }
}
