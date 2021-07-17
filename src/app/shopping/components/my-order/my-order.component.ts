import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent  {
  orders$:any;

  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 
    this.orders$=authService.user$?.pipe(switchMap ((u:any) => orderService.getOrdersByUser(u.uid)));
  }
}
