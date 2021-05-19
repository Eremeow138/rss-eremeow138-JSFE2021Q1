import { BaseComponent } from '../../../../base-component';

export class NavItem extends BaseComponent {
  private icon = '';

  private extraIconClasses = '';

  private text = '';

  constructor(icon: string, text: string, extraIconClasses?: string[]) {
    super('div', ['nav__item']);
    if (extraIconClasses) {
      this.extraIconClasses = extraIconClasses.join(' ');
    }
    this.icon = icon;
    this.text = text;
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <img class="nav__icon ${this.extraIconClasses}" src="${this.icon}" alt="">
      <div class="nav__text">${this.text}</div>
    `;
    return this.element;
  }
}
