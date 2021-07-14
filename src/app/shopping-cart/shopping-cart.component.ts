import { Observable } from 'rxjs';
import { ShoppingCardService } from './../services/shopping-card.service';
import { Component, OnInit } from '@angular/core';
import { shoppingCard } from '../models/shoppingCard';

@Component({
  selector: 'shopping-card',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCardComponent implements OnInit {
  card$?: Observable<shoppingCard>;
  constructor(public cardservice: ShoppingCardService) { }

  async ngOnInit() {
    this.card$=await this.cardservice.getCard();
  }
  addToCard(product:any) {
    this.cardservice.addToCard(product);
  }
  removeFromCard(product:any) {
    this.cardservice.removeFromCard(product)
  }

  /*clearCard() {
    this.cardservice.clearCard();
  }*/
}
