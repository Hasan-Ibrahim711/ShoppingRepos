import { shoppingCard } from './../models/shoppingCard';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-card-summary',
  templateUrl: './shopping-card-summary.component.html',
  styleUrls: ['./shopping-card-summary.component.css']
})
export class ShoppingCardSummaryComponent  {
  @Input('card') card?:shoppingCard;
}
