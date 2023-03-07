import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';
import { Skill } from 'src/model/skill';


@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void { }

  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillService.save(skill).subscribe(
      data => {
        alert("skill creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("error al crear skill");
        this.router.navigate(['']);
      }
    )
  }
}
