import './avatar-uploader.scss';
import { BaseComponent } from '../../../base-component';
import avatar from '../../../../assets/avatar-default.svg';

export class AvatarUploader extends BaseComponent {
  private readonly avatar: HTMLImageElement;

  private readonly input: HTMLInputElement;

  private readonly label: HTMLLabelElement;

  constructor() {
    super('div', ['avatar-uploader']);
    this.avatar = document.createElement('img');
    this.avatar.classList.add('avatar-uploader__avatar');
    this.avatar.src = avatar;

    this.input = document.createElement('input');
    this.input.classList.add('avatar-uploader__input');
    this.input.id = 'uploader-input';
    this.input.type = 'file';

    this.label = document.createElement('label');
    this.label.classList.add('avatar-uploader__label');
    this.label.setAttribute('for', 'uploader-input');
  }

  render(): HTMLElement {
    this.label.appendChild(this.avatar);
    this.element.appendChild(this.label);
    this.element.appendChild(this.input);

    this.input.addEventListener('change', event => {
      this.uploadAvatar(event);
    });

    return this.element;
  }

  uploadAvatar(event: Event): void {
    const elem = event.target as HTMLInputElement;
    if (elem.files) {
      const file = elem.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.avatar.src = reader.result;
        }
      };
      this.input.value = '';
    }
  }

  getAvatarSrc(): string {
    return this.avatar.src;
  }
}
