import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';

@Component({
  selector: 'euro-login',
  imports: [],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly ls: LocalStorageService
  ) {}

  onLoginClick() {
    const payload = {
      email: '',
      password: '',
    };

    this.authService.login(payload).subscribe((profile) => {
      this.ls.set<{ token: string; data: any }>('tokenKey', {
        token: 'xyz',
        data: null,
      }); //local storage setting
      console.log('Logged in');
    });
  }
}
