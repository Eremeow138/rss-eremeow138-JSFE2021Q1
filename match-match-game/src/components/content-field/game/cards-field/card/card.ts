import './card.scss';
import { BaseComponent } from '../../../../base-component';

const FLIP_CLASS = 'flipped';
export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.image = image;
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url('./images/${this.image}')"></div>
        <div class="card__back"></div>
      </div>
      `;
    return this.element;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.element.classList.remove('correct');
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise(resolve => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener(
        'transitionend',
        () => {
          this.element.classList.remove('wrong');
          resolve();
        },
        {
          once: true,
        },
      );
    });
  }
}
