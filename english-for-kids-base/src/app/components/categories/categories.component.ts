import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CardDataService } from 'src/app/services';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private readonly cardDataService: CardDataService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.cardDataService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
