import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';


@NgModule({
  imports: [
    RouterModule.forChild([
        {path: '', redirectTo : 'pages', pathMatch: 'full'},
        {path: 'pages', component: PagesComponent,
            children : [
                {path: 'page1', component: Page1Component},
                {path: 'page2', component: Page2Component},
                {path: '', redirectTo: 'page1', pathMatch: 'full'}
            ]
        }
    ])
  ],
  exports: [RouterModule]
})
export class PageMainRoutingModule { }
