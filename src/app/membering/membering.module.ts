import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



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
