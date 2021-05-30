import 'normalize.css';
import './scss/style.scss';
import { App } from './app';
import { DataBaseService, RootElement } from './app.api';
import { IndexedDB } from './indexed-db';
import { DBServiceImplmentation } from './dataBaseService';

window.onload = () => {
  const rootNode: RootElement = document.querySelector('body');
  if (!rootNode) throw Error('App root element not found');
  const db = new IndexedDB('Eremeow138', 'players', 'key');
  db.initBase().then(() => {
    const dbService: DataBaseService = DBServiceImplmentation.getInstance();
    dbService.subscribeOnDB('addRecord', db.addRecord.bind(db));
    dbService.subscribeOnDB('getRecords', db.GetRecords.bind(db));
    new App(rootNode).render();
  });
};
