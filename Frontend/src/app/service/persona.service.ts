import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //authURL = 'http://localhost:8080/personas/';
  authURL = 'https://portfolio-ramonserrano76.koyeb.app/personas/';
  constructor(private http: HttpClient) {}
 
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.authURL+ 'traer/perfil');
  }
}
