import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { CargarscriptsService } from 'src/app/service/cargarscripts.service';
import { ToastrService } from 'ngx-toastr';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  nombre_Usuario: void;


  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private _CargaScripts: CargarscriptsService, private toastr: ToastrService, private datosService: DatosService) {

    _CargaScripts.carga(["script"]);
  }




  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  // login() {
  //   this.router.navigate(['/login']);
  //   window.location.reload();
  // }   
  onLogin(): void {

    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password, new DatosService());
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      window.location.reload();
      // this.router.navigate(['/home']);
      // this.toastr.success('Login successful'); 

    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      this.toastr.error(this.errMsj, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-center',
      });

    })

    this.router.navigate(['/home']);
    let userInfo = this.tokenService.getToken();
    
    this.toastr.success(`¡¡¡Hola, ${this.nombreUsuario}!!!`, 'Success', { timeOut: 3000, positionClass: 'toast-top-center', });

    // this.toastr.success(`¡¡¡Hola ${this.tokenService.getUserName()}!!!`,'Success' ,{ timeOut: 3000, positionClass: 'toast-top-center',});

  }
}





