import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/model/skill';
import { SkillService } from 'src/app/service/skill.service';


@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})

export class EditSkillsComponent implements OnInit {
  skill: Skill = null;
  

  constructor(private skillService: SkillService, private activatedRoute: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data => {
        this.skill = data;
      },
      err => {
        console.log(err); // muestra el objeto error en la consola
        alert("Error al modificar skill: " + err.message); // muestra un mensaje de error con el mensaje de error del objeto error
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.skill);
    console.log(id);
    this.skillService.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }
}
