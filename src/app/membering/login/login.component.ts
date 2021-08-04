import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  facebook=faFacebook;
  google=faGoogle;
  form:FormGroup;
  constructor(private auth: AuthService, private toaste: ToastrService, private fb: FormBuilder) {
    this.form = fb.group({
      email: fb.control('',[Validators.email, Validators.required]),
      password: fb.control('',[Validators.minLength(6), Validators.required])
    })
  }

  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
  

  GoogleSignIn() {
    this.auth.SignInWithGoogle();
  }
  FacebookSignIn() {
    this.auth.SignInWithFacebook();
  }
  EmailSignIn(email:string,password:string) {
    this.auth.SignInWithEmailAndPassword(email,password).then(res => {
        this.toaste.success("You are logged in successfully");
    },error => {
      this.toaste.error("Email or password is n't valid!");
    });
  }
}
