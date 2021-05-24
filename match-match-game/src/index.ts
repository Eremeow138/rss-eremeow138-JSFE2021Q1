import 'normalize.css';
import './scss/style.scss';
import { App } from './app';
import { RootElement } from './app.api';

window.onload = () => {
  const rootNode: RootElement = document.querySelector('body');
  if (!rootNode) throw Error('App root element not found');

  new App(rootNode).render();
};
