import { PlayerObject } from './app.api';

export class IndexedDB {
  private db: IDBDatabase | null;

  private players: IDBObjectStore | null;

  private index: IDBIndex | null;

  constructor(
    private readonly baseName: string,
    private readonly storeName: string,
    private readonly keyPath: string,
    private readonly version = 1,
  ) {
    this.db = null;
    this.players = null;
    this.index = null;
  }

  initBase(): Promise<void> {
    return new Promise((resolve, reject) => {
      const openRequest = indexedDB.open(this.baseName, this.version);
      if (openRequest) {
        openRequest.onupgradeneeded = () => {
          this.db = openRequest.result;

          if (!this.db.objectStoreNames.contains(this.storeName)) {
            this.players = this.db.createObjectStore(this.storeName, {
              keyPath: this.keyPath,
            });
            this.players.createIndex('score', 'score');
          }
        };

        openRequest.onerror = () => {
          reject(new Error(String(openRequest.error)));
        };

        openRequest.onsuccess = () => {
          this.db = openRequest.result;

          this.db.onversionchange = () => {
            if (this.db) {
              this.db.close();
              reject(new Error('DB is old, refresh page'));
            }
          };
          resolve();
        };
        openRequest.onblocked = () => {
          reject(new Error('There is another connection to the base'));
        };
      }
    });
  }

  //
  addRecord(JSONStringData?: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (JSONStringData) {
        let transaction;
        if (this.db) {
          transaction = this.db.transaction(this.storeName, 'readwrite'); // (1)
        }

        let players;
        let request;
        if (transaction) {
          players = transaction.objectStore(this.storeName);
          const playerObj = JSON.parse(JSONStringData);
          request = players.put(playerObj);
          request.onsuccess = () => {
            resolve('success');
          };
          request.onerror = () => {
            reject(new Error('request error'));
          };
        }
      } else {
        reject(new Error('Input data is undefined'));
      }
    });
  }

  GetRecords(limit = 10000000): Promise<PlayerObject[]> {
    return new Promise((resolve, reject) => {
      const arrayOfObj: PlayerObject[] = [];
      let transaction;
      if (this.db) {
        transaction = this.db.transaction(this.storeName);
      }

      let players;
      let request: IDBRequest<IDBCursorWithValue | null>;
      if (transaction) {
        players = transaction.objectStore(this.storeName);
        request = players.index('score').openCursor(null, 'prev');
        let countOfRecords = 0;
        request.onsuccess = () => {
          const cursor = request.result;
          if (cursor && countOfRecords < limit) {
            arrayOfObj.push(cursor.value);
            countOfRecords++;
            cursor.continue();
          } else {
            resolve(arrayOfObj);
          }
        };
        request.onerror = () => {
          reject(new Error('Request error'));
        };
      }
    });
  }
}
