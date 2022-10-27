import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

import { persona } from 'src/model/persona.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = new persona("","","");

  
  constructor(public personaService : PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
