import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from 'src/model/skill';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'  
})

export class SkillService {
  authURL = 'https://portfolio-ramonserrano76.koyeb.app/skill/';
 // authURL = environment.URL + 'skill/';
  constructor(private httpClient: HttpClient) {   }
  
  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.authURL + 'lista');
  }
  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.authURL + `detail/${id}`);
  }
  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'create', skill);
  }
  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.authURL + `update/${id}`, skill);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.authURL + `delete/${id}`);
  }

}