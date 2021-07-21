import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CardDataService } from 'src/app/services';

@Component({
  selector: 'app-admin-category-card',
  templateUrl: './admin-category-card.component.html',
  styleUrls: ['./admin-category-card.component.scss'],
})
export class AdminCategoryCardComponent implements OnInit {
  @Input() categoryData?: Category;

  public categoryName = 'Name not found';

  constructor(private readonly cardDataService: CardDataService) {}

  ngOnInit(): void {
    if (this.categoryData) {
      this.categoryName = this.categoryData.name;
    }
  }

  public isFlipped = false;

  flip(): void {
    this.isFlipped = true;
  }

  flipBack(): void {
    this.isFlipped = false;
  }

  updateCategory(newName: string): void {
    if (this.categoryData) {
      this.cardDataService
        .updateCategoryName(newName, this.categoryData)
        .subscribe(categoryData => {
          this.categoryData = categoryData;
          this.flipBack();
        });
    }
  }
}
