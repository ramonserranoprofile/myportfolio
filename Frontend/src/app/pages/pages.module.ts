import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { LoginComponent } from "src/app/pages/login/login.component";
import { BackscreenComponent } from 'src/app/pages/backscreen/backscreen.component';
import { LogoComponent } from "src/app/pages/logo/logo.component";
import { HomeComponent } from '@home/home.component';
import { HeaderComponent } from '@shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { Experiencia } from 'src/model/experiencia';


  

@NgModule({
  declarations: [
    ProfileComponent,
    
   
    // LogoComponent,
    BackscreenComponent,
    
    
    // HomeComponent,  
        
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { 
  
};
exports: [ 
]
