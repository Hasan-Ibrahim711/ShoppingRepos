import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VegShoppingApp';

  constructor(private userServ: UserService,private auth: AuthService, private router: Router) {
    auth.user$.subscribe(user => {
      if(user) {
        this.userServ.save(user);
        let returnUrl: any=localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl)
      }
    })
  }
}
