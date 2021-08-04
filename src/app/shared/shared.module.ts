import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { CustomFormsModule } from 'ng2-validation';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ToastrModule } from 'ngx-toastr';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCardService } from './services/shopping-card.service';
import { UserService } from './services/user.service';
import { TextColorDirective } from './directives/text-color.directive';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ProductCardComponent,
    TextColorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FontAwesomeModule,
    DataTablesModule,  
    AngularFirestoreModule,
    AngularFireAuthModule,
    CustomFormsModule,
    NgbModule,
    ScrollingModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    ProductCardComponent,
    TextColorDirective,
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DataTablesModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    CustomFormsModule,
    NgbModule,
    ToastrModule,
    ScrollingModule,
    InfiniteScrollModule,
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
