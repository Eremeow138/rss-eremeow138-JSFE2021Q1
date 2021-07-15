import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  constructor(private readonly authenticationService: AuthenticationService) {}

  logout(): void {
    this.authenticationService.logout();
  }
}
