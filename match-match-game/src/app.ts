import { RouterService } from './app.api';
import { BaseComponent } from './components/base-component';
import { Modal } from './components/modal/modal';
import { Registration } from './components/modal/registration/registration';
import { GamePage } from './components/page/gamePage';
import { InstructionPage } from './components/page/instructionPage';
import { ScorePage } from './components/page/scorePage';
import { SettingsPage } from './components/page/settingsPage';
import { Router } from './components/router/router';
import { ModalServiceImplmentation } from './modal-service';
import { RouterServiceImplmentation } from './routerService';

export class App extends BaseComponent {
  private readonly router: Router;

  private readonly routerService: RouterService;

  private readonly modalService: ModalServiceImplmentation;

  private readonly modalReg: Modal;

  private readonly registration: Registration;

  private readonly modalWin: Modal;

  constructor(private readonly root: HTMLElement) {
    super('div', ['application']);

    this.modalService = new ModalServiceImplmentation();
    this.routerService = new RouterServiceImplmentation();
    this.modalReg = new Modal();
    this.modalWin = new Modal();
    this.registration = new Registration(
      this.modalService,
      this.modalWin,
      this.routerService,
    );
    this.modalReg.addChild(this.registration.render());

    this.router = new Router(this.root, [
      {
        path: '/',
        component: new InstructionPage(
          this.modalService,
          this.modalReg,
          this.routerService,
        ),
      },
      {
        path: '/best-score',
        component: new ScorePage(
          this.modalService,
          this.modalReg,
          this.routerService,
        ),
      },
      {
        path: '/game-settings',
        component: new SettingsPage(
          this.modalService,
          this.modalReg,
          this.routerService,
        ),
      },
    ]);

    if (localStorage.getItem('playerData')) {
      this.router.addRoute({
        path: '/game',
        component: new GamePage(
          this.modalService,
          this.modalWin,
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
