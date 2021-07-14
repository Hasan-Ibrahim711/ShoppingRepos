import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  facebook=faFacebook;
  google=faGoogle;
  constructor(private auth: AuthService,private toaste: ToastrService) { }

  ngOnInit(): void {
  }
  
  GoogleSignIn() {
    this.auth.SignInWithGoogle();
  }
  FacebookSignIn() {
    this.auth.SignInWithFacebook();
  }
  EmailSignIn(email:string,password:string,f:NgForm) {
    f.reset()
    this.auth.SignInWithEmailAndPassword(email,password).then(res => {
        this.toaste.success("You are logged in successfully");
    },error => {
      this.toaste.error("Email or password is n't valid!");
    });
  }
}
