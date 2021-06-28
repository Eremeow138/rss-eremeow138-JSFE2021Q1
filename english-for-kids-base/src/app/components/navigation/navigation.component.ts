import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CardDataService } from 'src/app/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  categories: Category[] = [];

  isOpen = false;

  constructor(private readonly cardDataService: CardDataService) {}

  ngOnInit(): void {
    this.getCategories();
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
