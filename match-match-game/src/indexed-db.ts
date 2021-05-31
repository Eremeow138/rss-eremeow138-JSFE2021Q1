import { PlayerObject } from './app.api';

export class IndexedDB {
  private db: IDBDatabase | null;

  private players: IDBObjectStore | null;

  private index: IDBIndex | null;

  // TODO: remove all comments and replace console logs on some functions
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
    return new Promise(resolve => {
      const openRequest = indexedDB.open(this.baseName, this.version);
      if (openRequest) {
        openRequest.onupgradeneeded = () => {
          // срабатывает, если на клиенте нет базы данных
          // ...выполнить инициализацию...

          this.db = openRequest.result;
          // проверить существование указанной версии базы данных, обновить по мере необходимости:
          if (!this.db.objectStoreNames.contains(this.storeName)) {
            // если хранилище "books" не существует
            this.players = this.db.createObjectStore(this.storeName, {
              keyPath: this.keyPath,
            });
            this.players.createIndex('score', 'score');
          }
        };

        openRequest.onerror = () => {
          console.error('Error', openRequest.error);
        };

        openRequest.onsuccess = () => {
          this.db = openRequest.result;
          // продолжить работу с базой данных, используя объект this.db
          this.db.onversionchange = () => {
            if (this.db) {
              this.db.close();
              alert('База данных устарела, пожалуста, перезагрузите страницу.');
            }
          };
          resolve();
        };
        openRequest.onblocked = () => {
          // есть другое соединение к той же базе
          // и оно не было закрыто после срабатывания на нём this.db.onversionchange
          console.log('blocked');
          // Такого не произойдёт, если мы закрываем соединение в this.db.onversionchange.
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
        // получить хранилище объектов для работы с ним
        let players;
        let request;
        if (transaction) {
          players = transaction.objectStore(this.storeName); // (2)
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
        transaction = this.db.transaction(this.storeName); // (1)
      }
      // получить хранилище объектов для работы с ним
      let players;
      let request: IDBRequest<IDBCursorWithValue | null>;
      if (transaction) {
        players = transaction.objectStore(this.storeName); // (2)
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
          reject(console.log('request error'));
        };
      }
    });
  }
}
