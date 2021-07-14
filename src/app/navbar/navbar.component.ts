import { Observable } from 'rxjs';
import { ShoppingCardService } from './../services/shopping-card.service';
import { UserService } from './../services/user.service';
import { AppUser } from './../models/appuser';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { shoppingCard } from '../models/shoppingCard';
import { faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser?:AppUser;
  shoppingCardCounter?:number;
  card$?:Observable<shoppingCard>;
  fashoppingcard = faShoppingCart;
  faHome=faHome;
  constructor(public auth: AuthService,public userAuth: UserService,private cardservice: ShoppingCardService) {
    this.userAuth.AppUser$?.subscribe(appuser=> this.appUser=appuser)
   }

 async ngOnInit() {
   this.card$=await this.cardservice.getCard();
  }

  signOut() {
    this.auth.SignOut()
  }
}
