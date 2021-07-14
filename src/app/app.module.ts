import { OrderService } from './services/order.service';
import { ShoppingCardService } from './services/shopping-card.service';
import { ProductService } from './services/product.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCardComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './services/auth-guard.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from "angular-datatables";
import { ProductsFilterComponent } from './products/products-filter/products-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCardSummaryComponent } from './shopping-card-summary/shopping-card-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCardComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    SignupFormComponent,
    LoginComponent,
    ProductFormComponent,
    ProductsFilterComponent,
    ProductCardComponent,
    ShoppingCardSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CustomFormsModule,
    FormsModule,
    DataTablesModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      {path: 'products' , component: ProductsComponent},
      {path: 'my/order' , component: MyOrderComponent},
      {path: 'shopping-card' , component: ShoppingCardComponent},
      {path: 'login' , component: LoginComponent},
      {path: 'signUp' , component: SignupFormComponent},
      {path: 'check-out' , component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path: 'order-success/:id' , component: OrderSuccessComponent, canActivate: [AuthGuardService]},
      {path: 'admin/products' , component: AdminProductsComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
      {path: 'admin/product/new' , component: ProductFormComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
      {path: 'admin/product/:id' , component: ProductFormComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
      {path: 'admin/orders' , component: AdminOrdersComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
      
    ])

  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    ProductService,
    ShoppingCardService,
    AdminAuthGuardService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
