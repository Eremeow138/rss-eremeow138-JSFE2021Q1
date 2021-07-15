import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
  ) {}

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/user/categories');
  }
}
