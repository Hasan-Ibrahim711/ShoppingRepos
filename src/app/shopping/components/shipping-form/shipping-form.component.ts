import { shoppingCard } from 'shared/models/shoppingCard';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'shared/models/order';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy {
  @Input('card') card?:shoppingCard;
  userId?:string;
  shipping={name:null,line_1:null,line_2:null,city:null};
  userSubscribtion?:Subscription;
  constructor(
    private orderService: OrderService,
    private auth: AuthService,
    private route: Router,
    ) {}

  async ngOnInit(){
    this.userSubscribtion=this.auth.user$?.subscribe(user => this.userId=user?.uid)
  }
  ngOnDestroy() {
    this.userSubscribtion?.unsubscribe();
  }
  async placeOrder() {
    let order=new Order(this.userId,this.shipping,this.card);
    let result=await this.orderService.storeOrder(order);
    this.route.navigate(['/shopping/order-success/',result.key])
  }
}
