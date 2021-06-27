import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CardDataService } from 'src/app/services';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.scss'],
})
export class CategoryCardsComponent implements OnInit {
  categories: Category[] = [];

  constructor(private readonly cardDataService: CardDataService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.cardDataService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
