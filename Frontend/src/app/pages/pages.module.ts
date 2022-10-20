import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
  

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { 
  
};
exports: [

]
