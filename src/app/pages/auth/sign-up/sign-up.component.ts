import { Component } from '@angular/core';
import { OptionsForm } from '@auth/form/form.component';
import { ACTIONS } from 'src/app/shared/constants/constant';
@Component({
  selector: 'app-sign-up',
  template: `<app-form [options]="options"></app-form>`,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  options: OptionsForm = {
    id: ACTIONS.signUp,
    label: ACTIONS.signUp
  }


}