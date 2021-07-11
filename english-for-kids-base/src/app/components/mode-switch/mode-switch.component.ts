import { Component } from '@angular/core';
import { GameService } from 'src/app/services';

@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.scss'],
})
export class ModeSwitchComponent {
  isCheck = false;

  text = 'train';

  constructor(private readonly gameService: GameService) {}

  check(): void {
    this.gameService.switchMode();
    this.isCheck = !this.isCheck;
    if (this.text === 'train') {
      this.text = 'play';
    } else {
      this.text = 'train';
    }
  }
}
