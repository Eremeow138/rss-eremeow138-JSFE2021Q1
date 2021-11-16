import { BaseComponent } from '../../base-component';

export class SettingsItem extends BaseComponent {
  private options = '';

  constructor(
    private readonly setting: string,
    private readonly placeholder: string,
    private readonly values: string[],
    private readonly keyOfLS: string,
  ) {
    super('div', ['settings__item']);
    values.forEach(value => {
      this.options += `<li class="settings__set">${value}</li>`;
    });
  }

  render(): HTMLElement {
    this.element.innerHTML = `
    <div class="settings__setting">${this.setting}</div>
    <div class="settings__select-box">
      <input class="settings__input" type="text" placeholder="${this.placeholder}" readonly>
      </input>
      <ul class="settings__list">
      ${this.options}
      </ul>
    </div>
    `;
    const input: HTMLInputElement | null =
      this.element.querySelector('.settings__input');
    const sets = this.element.querySelectorAll('.settings__set');
    const list = this.element.querySelector('.settings__list');
    if (input && list) {
      input.addEventListener('click', () => {
        list.classList.toggle('settings__list_visible');
      });
    }
    if (sets && input && list) {
      sets.forEach(set =>
        set.addEventListener('click', () => {
          if (set && set.textContent) {
            input.value = String(set.textContent);
            localStorage.setItem(this.keyOfLS, set.textContent.toLowerCase());
            list.classList.toggle('settings__list_visible');
          }
        }),
      );
    }

    return this.element;
  }
}
