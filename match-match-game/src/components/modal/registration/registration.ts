import './registration.scss';
import { Callback } from '../../../app.api';
import { Button } from '../../../shared/button/button';
import { BaseComponent } from '../../base-component';
import avatar from '../../../assets/avatar-default.svg';

export class Registration extends BaseComponent {
  constructor(private readonly callback: Callback) {
    super('div', ['registration']);
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <h2 class="registration__title">Register new Player</h2>
      <div class="registration__main">
        <div class="registration__input-box">
          <input class="registration__input">
          <input class="registration__input">
          <input class="registration__input">
        </div>
        <img class="registration__avatar" src="${avatar}"></img>
      </div>
      <div class="registration__footer">
      </div>
    `;
    this.element.querySelector('.registration__footer')?.appendChild(
      new Button('Add user', () => {
        this.callback();
      }).render(),
    );
    this.element.querySelector('.registration__footer')?.appendChild(
      new Button('Canel', () => {
        this.callback();
      }).render(),
    );
    return this.element;
  }
}
