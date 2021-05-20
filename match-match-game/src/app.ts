import { ModalService } from './app.api';
import { BaseComponent } from './components/base-component';
import { ContentField } from './components/content-field/content-field';
import { Game } from './components/content-field/game/game';
import { Header } from './components/header/header';
import { Modal } from './components/modal/modal';
import { Router } from './components/router/router';

export class App extends BaseComponent {
  private readonly game: Game;

  private readonly contentField: ContentField;

  private readonly router: Router;

  private readonly modal: Modal;

  constructor(
    private readonly root: HTMLElement,
    private readonly modalService: ModalService,
  ) {
    super('div', ['application']);
    this.game = new Game();
    this.contentField = new ContentField();
    this.router = new Router(this.contentField.render());
    this.modal = new Modal();
    this.modalService.subscribeOnModal(() => {
      this.modal.ShowHiddenModal();
    });
  }

  render(): HTMLElement {
    this.root.appendChild(this.element);
    this.element.appendChild(new Header(this.modalService).render());
    this.element.appendChild(this.contentField.render());
    this.element.appendChild(this.modal.render());
    this.router.route();
    window.addEventListener('hashchange', () => this.router.route());

    return this.element;
  }
}
