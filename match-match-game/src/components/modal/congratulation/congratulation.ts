import './congratulation.scss';
import { ModalService } from '../../../app.api';
import { Button } from '../../../shared/button/button';
import { BaseComponent } from '../../base-component';

export class Congratulation extends BaseComponent {
  private readonly button: Button;

  constructor(
    private text: string,
    private readonly modalService: ModalService,
  ) {
    super('div', ['congratulation']);
    this.button = new Button(
      'ok',
      () => {
        this.modalService.callAll();
        document.location.hash = '#/best-score';
      },
      'button',
    );
  }

  changeText(text: string): void {
    this.text = text;
    this.element.innerHTML = `
      <div class="congratulation__text">${this.text}</div>
    `;
    this.element.appendChild(this.button.render());
  }

  render(): HTMLElement {
    this.element.innerHTML = `
      <div class="congratulation__text">${this.text}</div>
    `;
    this.element.appendChild(this.button.render());
    return this.element;
  }
}
