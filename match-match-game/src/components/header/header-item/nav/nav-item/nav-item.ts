import { BaseComponent } from '../../../../base-component';

export class NavItem extends BaseComponent {
  private icon = '';

  private extraIconClasses = '';

  private text = '';

  private link: string;

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
