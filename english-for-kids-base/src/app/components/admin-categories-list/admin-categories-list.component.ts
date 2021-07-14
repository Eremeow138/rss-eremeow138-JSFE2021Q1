import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CardDataService } from 'src/app/services';

@Component({
  selector: 'app-admin-categories-list',
  templateUrl: './admin-categories-list.component.html',
  styleUrls: ['./admin-categories-list.component.scss'],
})
export class AdminCategoriesListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private readonly cardDataService: CardDataService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.cardDataService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
