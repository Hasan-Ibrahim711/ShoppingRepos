import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';

import { SharedModule } from './../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCardSummaryComponent } from './components/shopping-card-summary/shopping-card-summary.component';
import { ShoppingCardComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    ShoppingCardComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    ShoppingCardSummaryComponent,
    ShippingFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'my-order' , component: MyOrderComponent},
      {path: 'shopping-card' , component: ShoppingCardComponent},
      {path: 'check-out' , component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path: 'order-success/:id' , component: OrderSuccessComponent, canActivate: [AuthGuardService]},
    ])
  ],
  exports: [
  ]
})
export class ShoppingModule { }
