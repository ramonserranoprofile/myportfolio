
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { CargarscriptsService } from 'src/app/service/cargarscripts.service';
// import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})

export class LogoComponent implements OnInit {
  isLogged = false;
  userName: string;
  
  constructor(private router: Router, private tokenService: TokenService, private authService: AuthService, private notificationService: NotificationService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  login() {
    this.router.navigate(['/login']);
    window.location.reload();
  }
 
  async onLogOut(): Promise<void> {
    try {
      // Perform logout logic here
      this.tokenService.logOut();
      window.location.reload();
      // Redirect to homepage



    } catch (error) {
      console.error(error);
      // Display error message to user
      this.notificationService.showErrorMessage
    }
    await this.router.navigate(['/home']);
    this.toastr.success(`¡¡¡Adios, gracias por visitarme!!!`);
  }

}
