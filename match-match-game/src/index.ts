import 'normalize.css';
import './scss/style.scss';
import { App } from './app';

window.onload = () => {
  const appElement = document.querySelector('body');

  if (!appElement) throw Error('App root element not found');

  new App(appElement).start();
};
