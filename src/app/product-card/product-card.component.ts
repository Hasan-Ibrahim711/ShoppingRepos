
import { ShoppingCardService } from './../services/shopping-card.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product:any;
  @Input('shoppingCard') shoppingCard:any;
  constructor(private cardservice: ShoppingCardService) { }

  ngOnInit(): void {
  }

  addToCard() {
    this.cardservice.addToCard(this.product);
  }
  removeFromCard() {
    this.cardservice.removeFromCard(this.product)
  }
}
