import { BaseComponent } from '../../../../base-component';

export class NavItem extends BaseComponent {
  private icon = '';

  private extraIconClasses = '';

  private text = '';

  private link: string;

  private hash: string;

  constructor(
    link: string,
    icon: string,
    text: string,
    extraIconClasses?: string[],
  ) {
    super('a', ['nav__item']);

    if (extraIconClasses) {
      this.extraIconClasses = extraIconClasses.join(' ');
    }
    this.icon = icon;
    this.text = text;
    this.link = link;
    this.hash = window.location.hash.slice(1).toLowerCase() || '/';
    if (this.hash === (this.link.slice(1) || '/')) {
      this.element.classList.add('nav__item_active');
    }

    this.element.setAttribute('href', this.link);
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <img class="nav__icon ${this.extraIconClasses}" src="${this.icon}" alt="">
      <div class="nav__text">${this.text}</div>
    `;
    return this.element;
  }
}
