import './registration.scss';
import { Button } from '../../../shared/button/button';
import { BaseComponent } from '../../base-component';
import avatar from '../../../assets/avatar-default.svg';
import { Input } from './input/input';
import { RouterService } from '../../../app.api';
import { GamePage } from '../../page/gamePage';
import { Modal } from '../modal';
import { ModalServiceImplmentation } from '../../../modal-service';
import { AvatarUploader } from './avatar-uploader/avatar-uploader';

export class Registration extends BaseComponent {
  private arrOfInputs: Input[] = [];

  firstNameInput: Input;

  lastNameInput: Input;

  emailInput: Input;

  avatarUploader: AvatarUploader;

  constructor(
    private readonly modalService: ModalServiceImplmentation,
    private readonly modal: Modal,
    private readonly routerService: RouterService,
  ) {
    super('div', ['registration', 'invalid']);
    this.avatarUploader = new AvatarUploader();
    this.firstNameInput = new Input(
      'firstName',
      'First Name',
      /^[^(~!@#$%*()_—+=|:;"'`<>,.?/^0-9)]{1,30}$/,
      `The first name cannot contain special characters, numbers or be empty`,
      this.disableEnableButton.bind(this),
    );

    this.arrOfInputs.push(this.firstNameInput);

    this.lastNameInput = new Input(
      'lastName',
      'Last Name',
      /^[^(~!@#$%*()_—+=|:;"'`<>,.?/^0-9)]{1,30}$/,
      `The last name can't contain special characters, numbers or be empty`,
      this.disableEnableButton.bind(this),
    );

    this.arrOfInputs.push(this.lastNameInput);

    const FirstPartOfRegExp =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))/;
    const SecondPartOfRegExp =
      /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex = new RegExp(
      `${FirstPartOfRegExp.source}${SecondPartOfRegExp.source}`,
    );
    this.emailInput = new Input(
      'email',
      'E-mail',
      regex,
      'Invalid or empty email entered',
      this.disableEnableButton.bind(this),
    );

    this.arrOfInputs.push(this.emailInput);
  }

  checkInputsValidation(): boolean {
    const isValid = this.arrOfInputs.reduce((prev, input) => {
      return prev && input.getStatusValidation();
    }, true);

    return isValid;
  }

  disableEnableButton(): void {
    if (this.checkInputsValidation()) {
      this.element.classList.remove('invalid');
    } else {
      this.element.classList.add('invalid');
    }
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <form class="registration__form">
        <h2 class="registration__title">Register new Player</h2>
        <div class="registration__main">
          <div class="registration__input-box">
          </div>
        </div>
        <div class="registration__footer">
        </div>
      </form>
    `;

    this.element
      .querySelector('.registration__main')
      ?.appendChild(this.avatarUploader.render());

    this.element
      .querySelector('.registration__input-box')
      ?.append(
        this.firstNameInput.render(),
        this.lastNameInput.render(),
        this.emailInput.render(),
      );
    this.element
      .querySelector('.registration__footer')
      ?.appendChild(new Button('Add user', () => {}, 'submit').render());

    this.element.querySelector('.registration__footer')?.appendChild(
      new Button(
        'Canel',
        () => {
          this.modalService.callAll();
          this.arrOfInputs.forEach(input => input.clear());
          this.element.classList.add('invalid');
        },
        'button',
      ).render(),
    );

    this.element.addEventListener('submit', e => {
      e.preventDefault();
      if (!this.checkInputsValidation()) {
        return;
      }
      const inputs: NodeListOf<HTMLInputElement> | null =
        this.element.querySelectorAll('.registration__input');
      let fieldsData = '{';
      let keyValue = '';
      inputs.forEach((elem, index, list) => {
        keyValue += elem.value;
        if (index !== list.length - 1) {
          fieldsData += `"${elem.name}":"${elem.value}",`;
        } else {
          fieldsData += `"${elem.name}":"${
            elem.value
          }","key":"${keyValue}","avatar":"${this.avatarUploader.getAvatarSrc()}"}`;
        }
      });
      localStorage.setItem('playerData', fieldsData);
      this.routerService.reroute();
      this.routerService.addRoute({
        path: '/game',
        component: new GamePage(
          this.modalService,
          this.modal,
          this.routerService,
        ),
      });
      this.arrOfInputs.forEach(input => input.clear());
      this.element.classList.add('invalid');
      this.modalService.callAll();
      // const responsePromise: Promise<string> = this.addRecord(fieldsData);
      // responsePromise.then(
      //   () => {
      //     this.showHideModal();
      //     const refreshBtn = document.createElement('a');
      //     refreshBtn.href = '#/';
      //     refreshBtn.click();
      //   },
      //   error => alert(error),
      // );
    });
    return this.element;
  }
}
