import { DataBaseService, PlayerObject, RouterService } from '../../app.api';
import { DBServiceImplmentation } from '../../dataBaseService';
import { ModalServiceImplmentation } from '../../modal-service';
import { Score } from '../content-field/score/score';
import { Header } from '../header/header';
import { Modal } from '../modal/modal';
import { Page } from './page';
import avatar from '../../assets/avatar-default.svg';

export class ScorePage extends Page {
  private readonly dbService: DataBaseService;

  private readonly score: Score;

  arrOfPlayers: PlayerObject[] = [];

  private readonly LIMITER = 10;

  constructor(
    readonly modalService: ModalServiceImplmentation,
    readonly modal: Modal,
    readonly routerService: RouterService,
  ) {
    super();
    this.dbService = DBServiceImplmentation.getInstance();
    this.score = new Score();
  }

  render(): HTMLElement {
    this.element.innerHTML = '';
    this.contentField.element.innerHTML = '';
    this.element.appendChild(
      new Header(this.modalService, this.routerService).render(),
    );
    this.dbService
      .getRecords(this.LIMITER)
      .then(arr => {
        this.arrOfPlayers = arr;
        this.arrOfPlayers.forEach(player => {
          this.score.addPlayer(
            `${player.firstName} ${player.lastName}`,
            player.email,
            `${avatar}`,
            player.score,
          );
        });
      })
      .catch(err => console.log(err));

    this.contentField.element.appendChild(this.score.render());
    this.element.appendChild(this.contentField.render());

    this.element.appendChild(this.modal.render());
    this.modalService.cleanCallbacksArray();
    this.modalService.subscribeOnModal(() => {
      this.modal.ShowHiddenModal();
    });
    return this.element;
  }
}
