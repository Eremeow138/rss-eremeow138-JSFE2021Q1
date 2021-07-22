import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import {
  AuthenticationService,
  CardDataService,
  ModalService,
} from 'src/app/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public categories: Category[] = [];

  public isOpen = false;

  public isLogin = false;

  readonly loginModalId = 'login-modal';

  constructor(
    private readonly cardDataService: CardDataService,
    private readonly authenticationService: AuthenticationService,
    private readonly modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.getCategories();
    const tokenFromLocalStorage = localStorage.getItem('adminToken');
    if (tokenFromLocalStorage && tokenFromLocalStorage !== '') {
      this.isLogin = true;
    }
    this.authenticationService.getToken().subscribe(token => {
      this.isLogin = token !== '';
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

  openLoginModal(modalId: string): void {
    this.modalService.open(modalId);
  }

  private getCategories(): void {
    this.cardDataService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
