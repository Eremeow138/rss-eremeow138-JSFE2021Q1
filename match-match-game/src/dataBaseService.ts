import { DataBaseService } from './app.api';

interface CallbackAndName {
  callbackName: string;
  callback: (jsonStringData?: string) => void & Promise<string>;
}
export class DBServiceImplmentation implements DataBaseService {
  private callbacksAndNames: CallbackAndName[];

  private static instance: DBServiceImplmentation;

  private constructor() {
    this.callbacksAndNames = [];
  }

  public static getInstance(): DBServiceImplmentation {
    if (!DBServiceImplmentation.instance) {
      DBServiceImplmentation.instance = new DBServiceImplmentation();
    }
    return DBServiceImplmentation.instance;
  }

  subscribeOnDB(
    callbckName: string,
    callbck: (jsonStringData?: string) => void & Promise<string>,
  ): void {
    this.callbacksAndNames.push({
      callbackName: callbckName,
      callback: callbck,
    });
  }

  addRecord(jsonStringData: string): Promise<string> {
    const callbackObj = this.callbacksAndNames.find(r =>
      r.callbackName.match(/^addRecord$/),
    );
    if (callbackObj) {
      return callbackObj.callback(jsonStringData);
    }
    return new Promise(reject => {
      reject('error');
    });
  }
}
