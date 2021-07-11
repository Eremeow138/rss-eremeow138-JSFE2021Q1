import { Component } from '@angular/core';
import { GameService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly gameService: GameService) {
    this.gameService.getMode().subscribe(mode => {
      if (mode) {
        document.body.classList.add('game');
      } else {
        document.body.classList.remove('game');
      }
    });
  }

  title = 'English for kids';
}
