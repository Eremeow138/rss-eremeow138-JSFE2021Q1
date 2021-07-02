import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CardDataService, GameService } from 'src/app/services';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  isGameMode = false;

  constructor(
    private readonly cardDataService: CardDataService,
    private gameService: GameService,
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.gameService.getMode().subscribe(mode => {
      this.isGameMode = mode;
    });
  }

  getCategories(): void {
    this.cardDataService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
