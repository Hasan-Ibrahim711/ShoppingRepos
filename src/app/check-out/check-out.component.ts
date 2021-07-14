import { shoppingCard } from './../models/shoppingCard';
import { ShoppingCardService } from './../services/shopping-card.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  
  card$?:Observable<shoppingCard>;

  constructor(private cardservice: ShoppingCardService) {}

  async ngOnInit() {
    this.card$= await this.cardservice.getCard();  
  }
}
