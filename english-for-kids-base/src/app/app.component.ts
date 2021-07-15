import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, GameService, ModalService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loginModalId = 'login-modal';

  public isLoginModalOpen = false;

  constructor(
    private readonly gameService: GameService,
    private readonly modalService: ModalService,
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
  ) {
    this.gameService.getMode().subscribe(mode => {
      if (mode) {
        document.body.classList.add('game');
      } else {
        document.body.classList.remove('game');
      }
    });
    this.authenticationService.getToken().subscribe(token => {
      if (token !== '') {
        this.closeModal(this.loginModalId);
        this.router.navigateByUrl('/admin/categories');
      } else {
        console.log('неверный пароль');
      }
    });
  }

  public title = 'English for kids';

  closeModal(modalId: string): void {
    this.modalService.close(modalId);
  }

  login(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const login = formData.get('login') as string;
    const password = formData.get('password') as string;
    if (login && password) {
      this.authenticationService.login(login, password);
    }
  }
}
