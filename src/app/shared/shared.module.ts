import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingCardService } from './services/shopping-card.service';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    DataTablesModule,  
    AngularFirestoreModule,
    AngularFireAuthModule,
    CustomFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    ProductCardComponent,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    DataTablesModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    CustomFormsModule,
    NgbModule,
    ToastrModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    ProductService,
    ShoppingCardService,
    OrderService
  ]
})
export class SharedModule { }
