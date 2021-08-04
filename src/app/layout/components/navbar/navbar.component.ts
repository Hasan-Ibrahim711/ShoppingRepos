import { Observable } from 'rxjs';
import { ShoppingCardService } from 'shared/services/shopping-card.service';
import { UserService } from 'shared/services/user.service';
import { AppUser } from 'shared/models/appuser';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { shoppingCard } from 'shared/models/shoppingCard';
import { faShoppingCart, faHome, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser?:AppUser;
  shoppingCardCounter?:number;
  card$?:Observable<shoppingCard>;
  shoppingcardIcon = faShoppingCart;
  homeIcon=faHome;
  bedtime=faMoon;
  suntime=faSun;
  _darkMode=false;
  @Output('darkMode') darkMode=new EventEmitter<boolean>();
  constructor(public auth: AuthService,
    public userAuth: UserService,
    private cardservice: ShoppingCardService) {
    this.userAuth.AppUser$?.subscribe(appuser=> this.appUser=appuser)
   }

 async ngOnInit() {
   this.card$=await this.cardservice.getCard();
  }

  signOut() {
    this.auth.SignOut()
  }
  changeTheme() {
    this._darkMode=!this._darkMode;
    this.darkMode.emit(this._darkMode);
  }
}
