import { Injectable } from '@angular/core';
import { LoginUsuario } from 'src/model/login-usuario';
@Injectable({
  providedIn: 'root'
})

export class DatosService {
  nombreUsuario = '';
  cambiarNombre(nombre: string) {
    this.nombreUsuario = nombre;
  }
}

