import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule, NbIconModule } from '@nebular/theme';
import { AppRoutingModule } from 'app/app-routing.module';
import { environment } from 'environments/environment';

import { LayoutModule } from './../layout/layout.module';
import { RoutingModule } from './../routing/routing.module';
import { SharedModule } from './../shared/shared.module';




@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    LayoutModule,
    RoutingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports:[
    SharedModule,
    LayoutModule,
    RoutingModule,
    AppRoutingModule,
  ]
})
export class CoreModule { }
