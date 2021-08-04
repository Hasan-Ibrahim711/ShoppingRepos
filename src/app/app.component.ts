import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VegShoppingApp';
  darkMode=false;

  constructor(private userServ: UserService,private auth: AuthService, private router: Router) {
    auth.user$.subscribe(user => {
      if(user) {
        this.userServ.save(user);
        let returnUrl: any=localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl)
      }
    })
  }

  changeTheme(event:boolean) {
    if(event)
      this.darkMode=true;
    else
      this.darkMode=false;
  }
}
