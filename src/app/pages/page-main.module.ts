import { NgModule } from '@angular/core';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PagesComponent } from './pages.component';
import { PageMainRoutingModule } from './page-main-routing.module';

@NgModule({
  imports: [
    PageMainRoutingModule
  ],
  declarations: [Page1Component, Page2Component, PagesComponent]
})
export class PageMainModule { }
