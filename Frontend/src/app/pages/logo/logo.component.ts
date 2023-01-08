
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
// import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/service/notification.service';
import { DatosService } from 'src/app/service/datos.service';
import { USER_STORAGE_KEY } from '@shared/constants/constant';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})

export class LogoComponent implements OnInit {
  isLogged = false;
  @Input() username: string;
  public isNavOpen: boolean;
  
  

  constructor(private router: Router, private tokenService: TokenService, private authService: AuthService, private notificationService: NotificationService, private toastr: ToastrService, private datosService: DatosService) {
    this.datosService.cambiarNombre(this.username);
  }
  scroll(id: any) {
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    this.isNavOpen = false;
  }
  getNombreUsuario() {
    return this.tokenService.getUserName();
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
      let userInfo = this.tokenService.getToken();
      this.username = this.tokenService.getUserName();
      this.toastr.success(`¡¡¡Adios, ${this.username}!!!`, 'logout', { timeOut: 3000, positionClass: 'toast-top-center', });
      // Perform logout logic here    
      this.tokenService.logOut();
      window.location.reload();
      // Redirect to homepage



    } catch (error) {
      console.error(error);
      // Display error message to user
      this.notificationService.showErrorMessage
    }
    this.router.navigate(['/home']);
    
  }

}
