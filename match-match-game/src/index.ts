import 'normalize.css';
import './scss/style.scss';
import { App } from './app';
import { RootElement } from './app.api';
import { ModalServiceImplmentation } from './modal-service';

window.onload = () => {
  const rootNode: RootElement = document.querySelector('body');
  const modalService = new ModalServiceImplmentation();
  if (!rootNode) throw Error('App root element not found');

  new App(rootNode, modalService).render();
};
