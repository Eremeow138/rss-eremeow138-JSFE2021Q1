export class IndexedDB {
  private openRequest: IDBOpenDBRequest;

  private db: IDBDatabase | null;

  // TODO: remove all comments and replace console logs on some functions
  constructor(
    private readonly baseName: string,
    private readonly storeName: string,
    private readonly keyPath: string,
    version = 1,
  ) {
    this.db = null;
    this.openRequest = indexedDB.open(this.baseName, version);
    // проверить существование указанной версии базы данных, обновить по мере необходимости:
    this.openRequest.onupgradeneeded = () => {
      // срабатывает, если на клиенте нет базы данных
      // ...выполнить инициализацию...
      this.db = this.openRequest.result;
      if (!this.db.objectStoreNames.contains(this.storeName)) {
        // если хранилище "books" не существует
        this.db.createObjectStore(this.storeName, { keyPath: this.keyPath }); // создаем хранилище
      }
    };

    this.openRequest.onerror = () => {
      console.error('Error', this.openRequest.error);
    };

    this.openRequest.onsuccess = () => {
      this.db = this.openRequest.result;
      // продолжить работу с базой данных, используя объект this.db
      this.db.onversionchange = () => {
        if (this.db) {
          this.db.close();
          alert('База данных устарела, пожалуста, перезагрузите страницу.');
        }
      };
    };
    this.openRequest.onblocked = () => {
      // есть другое соединение к той же базе
      // и оно не было закрыто после срабатывания на нём this.db.onversionchange
      console.log('blocked');
      // Такого не произойдёт, если мы закрываем соединение в this.db.onversionchange.
    };
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
}
