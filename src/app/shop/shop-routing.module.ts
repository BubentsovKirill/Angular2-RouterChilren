import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import {Shop1Component} from './shop1/shop1.component';
import {Shop2Component} from './shop2/shop2.component';
import {Shop3Component} from './shop3/shop3.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', redirectTo : 'shop', pathMatch: 'full'},
      {path:'shop', component: ShopComponent,
        children : [
          {path:'shop1', component: Shop1Component},
          {path:'shop2', component: Shop2Component},
          {path:'shop3', component: Shop3Component},
          {path:'', redirectTo: 'shop1', pathMatch : 'full'}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
