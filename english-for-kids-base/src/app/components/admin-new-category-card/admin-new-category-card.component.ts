import { Component } from '@angular/core';
import { CardDataService } from 'src/app/services';

@Component({
  selector: 'app-admin-new-category-card',
  templateUrl: './admin-new-category-card.component.html',
  styleUrls: ['./admin-new-category-card.component.scss'],
})
export class AdminNewCategoryCardComponent {
  public categoryName = '';

  constructor(private readonly cardDataService: CardDataService) {}

  public isFlipped = false;

  flip(): void {
    this.isFlipped = true;
  }

  flipBack(): void {
    this.isFlipped = false;
  }

  createCategory(name: string): void {
    console.log(this);
  }
}
