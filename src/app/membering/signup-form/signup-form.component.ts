import { UserService } from 'shared/services/user.service';
import { AuthService } from 'shared/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
constructor(private toaste: ToastrService,private route: Router,private auth:AuthService,private userserv:UserService) {}
signUp(email:string,password:string) {
  this.auth.SignUpWithEmailAndPassword(email,password).then(user => {
    this.toaste.success('You are logged in successfully');
    this.route.navigate(['/']);
  })
}
}
