import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';



@NgModule({
  declarations: [
    SignupFormComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'login' , component: LoginComponent},
      {path: 'signUp' , component: SignupFormComponent},
    ])
  ]
})
export class MemberingModule { }
