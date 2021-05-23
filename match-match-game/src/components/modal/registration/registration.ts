import './registration.scss';
import { Callback, CallbackAddRecord } from '../../../app.api';
import { Button } from '../../../shared/button/button';
import { BaseComponent } from '../../base-component';
import avatar from '../../../assets/avatar-default.svg';

export class Registration extends BaseComponent {
  constructor(
    private readonly showHideModal: Callback,
    private readonly addRecord: CallbackAddRecord,
  ) {
    super('div', ['registration']);
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <form class="registration__form">
        <h2 class="registration__title">Register new Player</h2>
        <div class="registration__main">
          <div class="registration__input-box">
            <input name="firstName" class="registration__input">
            <input name="lastName" class="registration__input">
            <input name="email"class="registration__input">
          </div>
          <img class="registration__avatar" src="${avatar}"></img>
        </div>
        <div class="registration__footer">
        </div>
      </form>
    `;
    this.element
      .querySelector('.registration__footer')
      ?.appendChild(new Button('Add user', () => {}, 'submit').render());
    this.element.querySelector('.registration__footer')?.appendChild(
      new Button(
        'Canel',
        () => {
          this.showHideModal();
        },
        'button',
      ).render(),
    );
    this.element.addEventListener('submit', e => {
      e.preventDefault();
      const inputs: NodeListOf<HTMLInputElement> | null =
        this.element.querySelectorAll('.registration__input');
      let fieldsData = '{';
      let keyValue = '';
      inputs.forEach((elem, index, list) => {
        keyValue += elem.value;
        if (index !== list.length - 1) {
          fieldsData += `"${elem.name}":"${elem.value}",`;
        } else {
          fieldsData += `"${elem.name}":"${elem.value}","key":"${keyValue}"}`;
        }
      });
      localStorage.setItem('playerData', fieldsData);
      const responsePromise: Promise<string> = this.addRecord(fieldsData);
      responsePromise.then(
        () => {
          this.showHideModal();
          const refreshBtn = document.createElement('a');
          refreshBtn.href = '#/';
          refreshBtn.click();
        },
        error => alert(error),
      );
    });
    return this.element;
  }
}
