import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ACTIONS } from 'src/app/shared/constants/constant';
import { AuthService } from './services/auth.services';
import { ToastrService } from 'ngx-toastr';
import { ApiError, User, UserCredentials } from '@supabase/gotrue-js';
export interface OptionsForm {
  id: string;
  label: string;
}
interface UserResponse extends User, ApiError { }

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  authForm !: UntypedFormGroup;
  signIn = ACTIONS.signIn;
  @Input() options!: OptionsForm;

  constructor(
    private readonly authSvc: AuthService,
    private readonly fb: UntypedFormBuilder,
    private readonly router: Router,
    private readonly toastSvc: ToastrService,
  ) { }
  ngOnInit(): void {
    this.initForm();
  }

  async onSubmit(): Promise<void> {

    const credentials: UserCredentials = this.authForm.value;
    let actionToCall = this.authSvc.signUp(credentials);

    if (this.options.id === ACTIONS.signIn) {
      actionToCall = this.authSvc.signIn(credentials);


    }

    try {
      const result = actionToCall as unknown as UserResponse;
      if (result.email) {
        this.redirectUser();

      } else {
        this.toastSvc.info(result.message, 'info');

      }
    } catch (error) {
      console.log(error);
    }
  }
  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  private redirectUser(): void {
    this.router.navigate(['/home']);
  }

}
