import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//module
import { AppRoutingModule } from './app-routing.module';
import { PageMainModule } from './pages/page-main.module';
import { ShopModule } from "./shop/shop.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PageMainModule,
      ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }