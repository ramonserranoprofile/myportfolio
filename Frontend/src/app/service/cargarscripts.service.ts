import { Injectable } from '@angular/core';
import { Script } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class CargarscriptsService {

  constructor() { }

  carga(archivos: string[]) {
    for (let archivo of archivos){
      let script = document.createElement("script");
    script.src = "assets/js/" + archivo + ".js";
    let body = document.getElementsByTagName("body")[0];
    body.appendChild( script );
    }
  }
}


