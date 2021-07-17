import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { AuthGuardService } from 'shared/services/auth-guard.service';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';



@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products' , component: AdminProductsComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
      {path: 'product/new' , component: ProductFormComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
      {path: 'product/:id' , component: ProductFormComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
      {path: 'orders' , component: AdminOrdersComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
    ])
  ],
  providers:[
    AdminAuthGuardService,
  ]
})
export class AdminModule { }
