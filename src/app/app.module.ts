import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http'
import {FormsModule} from "@angular/forms";
//import { BuyService } from './buy.service'
import { SellService} from '../services/sell'
//import { FontAwesomeModule} from '../../node_modules/@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TopbarComponent } from './topbar/topbar.component';
import {SampleComponent} from './sample/sample.component';
import {LoginComponent} from './login/logn.component';
import { ChangetextDirective } from './changetext.directive'
import {SqrtPipe} from '../sqrtpipe';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component'

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ProductsComponent,
    TopbarComponent,LoginComponent, ChangetextDirective,SqrtPipe, MenComponent, WomenComponent, KidsComponent

  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,
    ReactiveFormsModule,RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      { path:'sample',component:SampleComponent},
      {path :'men',component :MenComponent},
      {path :'women', component : WomenComponent},
      {path :'kids',component :KidsComponent} 
    ])
  ],
  providers: [SellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
