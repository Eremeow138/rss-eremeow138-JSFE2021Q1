import { Component } from '@angular/core';

@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.scss'],
})
export class ModeSwitchComponent {
  isCheck = false;

  text = 'train';

  check(): void {
    this.isCheck = !this.isCheck;
    if (this.text === 'train') {
      this.text = 'play';
    } else {
      this.text = 'train';
    }
  }
}
