import { UserService } from 'shared/services/user.service';
import { AuthService } from 'shared/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
constructor(private toaste: ToastrService,private route: Router,private auth:AuthService,private userserv:UserService) {}

form=new FormGroup ({
  email: new FormControl('',[Validators.email,Validators.required]),
  password: new FormControl('',[Validators.minLength(6),Validators.required])
})

get email() {
  return this.form.get('email')
}
get password() {
  return this.form.get('password')
}

signUp(email:string,password:string) {
  this.auth.SignUpWithEmailAndPassword(email,password).then(user => {
    this.toaste.success('You are logged in successfully');
    this.route.navigate(['/']);
  })
}
}
