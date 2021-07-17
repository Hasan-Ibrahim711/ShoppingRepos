import { ShoppingModule } from './../shopping/shopping.module';
import { RoutingModule } from './../routing/routing.module';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AdminModule } from 'app/admin/admin.module';
import { MemberingModule } from 'app/membering/membering.module';
import { environment } from 'environments/environment';

import { LayoutModule } from './../layout/layout.module';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    LayoutModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports:[
    SharedModule,
    LayoutModule,
    RoutingModule
  ]
})
export class CoreModule { }
