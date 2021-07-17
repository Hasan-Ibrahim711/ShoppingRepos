import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'app/layout/components/home/home.component';




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path:'',component:HomeComponent},
      { path: 'admin', loadChildren: () => import('./../admin/admin.module').then(m => m.AdminModule) },
      { path: 'shopping', loadChildren: () => import('./../shopping/shopping.module').then(m => m.ShoppingModule) },
      { path: 'membering', loadChildren: () => import('./../membering/membering.module').then(m => m.MemberingModule) },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
