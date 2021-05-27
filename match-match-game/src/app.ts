import { RouterService } from './app.api';
import { BaseComponent } from './components/base-component';
import { Game } from './components/content-field/game/game';
import { Modal } from './components/modal/modal';
import { Registration } from './components/modal/registration/registration';
import { GamePage } from './components/page/gamePage';
import { InstructionPage } from './components/page/instructionPage';
import { ScorePage } from './components/page/scorePage';
import { SettingsPage } from './components/page/settingsPage';
import { Router } from './components/router/router';
import { IndexedDB } from './indexed-db';
import { ModalServiceImplmentation } from './modal-service';
import { RouterServiceImplmentation } from './routerService';

export class App extends BaseComponent {
  private readonly router: Router;

  private readonly routerService: RouterService;

  private readonly db: IndexedDB;

  private readonly modalService: ModalServiceImplmentation;

  private readonly modal: Modal;

  private readonly registration: Registration;

  constructor(private readonly root: HTMLElement) {
    super('div', ['application']);
    this.db = new IndexedDB('Eremeow138', 'players', 'key');
    this.modalService = new ModalServiceImplmentation();
    this.routerService = new RouterServiceImplmentation();
    this.modal = new Modal();
    this.registration = new Registration(
      this.modalService,
      this.modal,
      this.routerService,
    );
    this.modal.addChild(this.registration.render());

    this.router = new Router(this.root, [
      {
        path: '/',
        component: new InstructionPage(
          this.modalService,
          this.modal,
          this.routerService,
        ),
      },
      {
        path: '/best-score',
        component: new ScorePage(
          this.modalService,
          this.modal,
          this.routerService,
        ),
      },
      {
        path: '/game-settings',
        component: new SettingsPage(
          this.modalService,
          this.modal,
          this.routerService,
        ),
      },
    ]);

    if (localStorage.getItem('playerData')) {
      this.router.addRoute({
        path: '/game',
        component: new GamePage(
          this.modalService,
          this.modal,
          this.routerService,
        ),
      });
    }

    this.routerService.subscribeOnRouter(
      'reroute',
      this.router.route.bind(this.router),
    );
    this.routerService.subscribeOnRouter('addRoute', rout => {
      if (rout) {
        this.router.addRoute(rout);
      }
    });
  }

  render(): HTMLElement {
    this.router.route();
    window.addEventListener('hashchange', () => this.router.route());

    return this.element;
  }
}
