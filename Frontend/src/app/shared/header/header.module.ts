import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from 'src/app/pages/logo/logo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
