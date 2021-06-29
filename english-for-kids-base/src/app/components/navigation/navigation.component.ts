import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CardDataService, GameService } from 'src/app/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  categories: Category[] = [];

  isOpen = false;

  isGameMode = false;

  constructor(
    private readonly cardDataService: CardDataService,
    private readonly gameService: GameService,
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

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    if (this.isOpen) {
      this.toggleMenu();
    }
  }
}
