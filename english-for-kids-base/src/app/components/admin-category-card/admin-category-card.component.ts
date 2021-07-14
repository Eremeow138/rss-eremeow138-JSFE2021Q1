import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models';

@Component({
  selector: 'app-admin-category-card',
  templateUrl: './admin-category-card.component.html',
  styleUrls: ['./admin-category-card.component.scss'],
})
export class AdminCategoryCardComponent {
  @Input() categoryData?: Category;

  public isFlipped = false;

  flip(): void {
    this.isFlipped = true;
  }

  flipBack(): void {
    this.isFlipped = false;
  }
}
