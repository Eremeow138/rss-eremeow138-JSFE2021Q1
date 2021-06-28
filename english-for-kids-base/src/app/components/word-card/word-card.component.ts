import { Component, Input } from '@angular/core';
import { Word } from 'src/app/models';
import { GameService } from 'src/app/services';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss'],
})
export class WordCardComponent {
  constructor(private readonly gameService: GameService) {}

  @Input() word?: Word;

  isFlipped = false;

  flip() {
    this.isFlipped = true;
  }

  flipBack() {
    this.isFlipped = false;
  }

  playWord(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const src = this.word?.audioSrc;

    if (src && !target.classList.contains('card__flip-button')) {
      this.gameService.play(src);
    }
  }
}
