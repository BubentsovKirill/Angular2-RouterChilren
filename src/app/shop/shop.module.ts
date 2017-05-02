import { NgModule } from '@angular/core';
//component
import { Shop1Component } from './shop1/shop1.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop3Component } from './shop3/shop3.component';
import { ShopComponent } from './shop.component';
//module
import {ShopRoutingModule} from './shop-routing.module';

@NgModule({
  imports: [
      ShopRoutingModule
  ],
  declarations: [Shop1Component,Shop2Component,Shop3Component, ShopComponent]
})
export class ShopModule { }
