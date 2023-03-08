import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';
import { HomeComponent } from '@home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditeducacionComponent } from './pages/educacion/edit-educacion.component';
import { NeweducacionComponent } from './pages/educacion/new-educacion.component';
import { EditExperienciaComponent } from './pages/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './pages/experiencia/new-experiencia.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EditSkillsComponent } from './pages/skills/edit-skills.component';
import { NewSkillsComponent } from './pages/skills/new-skills.component';
import { SkillsComponent } from './pages/skills/skills.component';


  // { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
const routes: Routes = [
  // { path: 'home', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },  
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: 'nuevaskill', component: NewSkillsComponent },
  { path: 'editskill/:id', component: EditSkillsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  
  {
    path: 'sign-in', loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'sign-up', loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule),
    canActivate: [AuthGuard]
  },
//   { path: '**', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', redirectTo: '/home', pathMatch: 'full' },
//   {
//     path: 'profile', redirectTo: 'profile.html', pathMatch: 'full'
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
