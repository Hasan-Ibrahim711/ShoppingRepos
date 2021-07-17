import { RoutingModule } from './../routing/routing.module';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsFilterComponent } from './components/products/products-filter/products-filter.component';
import { ProductsComponent } from './components/products/products.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductsFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class LayoutModule { }
