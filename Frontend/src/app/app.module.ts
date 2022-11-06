import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '@home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from '@home/home.module';
import { LoginComponent } from './pages/login/login.component';
import { LogoComponent } from './pages/logo/logo.component';
import { PagesModule } from './pages/pages.module';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienciaComponent } from './pages/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './pages/experiencia/new-experiencia.component';
import { Experiencia } from 'src/model/experiencia';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { CommonModule } from '@angular/common';
import { EditeducacionComponent } from './pages/educacion/edit-educacion.component';
import { NeweducacionComponent } from './pages/educacion/new-educacion.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { CargarscriptsService } from './service/cargarscripts.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent,
    LogoComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    EducacionComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    ProfileComponent,
    


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
    preventDuplicates: true,    
    }),
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([]),
    
  ],

  providers: [interceptorProvider, CargarscriptsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
