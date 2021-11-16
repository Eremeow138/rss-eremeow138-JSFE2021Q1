import { Component, Input } from '@angular/core';
import { CardData } from 'src/app/models';

@Component({
  selector: 'app-admin-word-card',
  templateUrl: './admin-word-card.component.html',
  styleUrls: ['./admin-word-card.component.scss'],
})
export class AdminWordCardComponent {
  @Input() cardData?: CardData;

  public isFlipped = false;

  flip(): void {
    this.isFlipped = true;
  }

  flipBack(): void {
    this.isFlipped = false;
  }
}
