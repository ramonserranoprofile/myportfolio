import { Component } from '@angular/core';
import { AuthService } from '@auth/form/services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user$ = this.authSvc.user$;
  constructor(private readonly authSvc: AuthService) { }

  async onLogout(): Promise<void> {
    try {
      await this.authSvc.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
