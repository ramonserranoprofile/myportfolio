import { DatosService } from "src/app/service/datos.service";

export class LoginUsuario {
  nombreUsuario: string;
  password: string;  

  constructor(
    nombreUsuario: string,
    password: string,
    private datosService: DatosService
  ) {
    this.datosService.cambiarNombre(nombreUsuario);
    this.nombreUsuario = nombreUsuario;
    this.password = password;
  }
}




