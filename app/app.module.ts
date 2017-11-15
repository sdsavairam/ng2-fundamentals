
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule],
  declarations: [ AppComponent, ProductListComponent ],
  bootstrap:    [ AppComponent, ProductListComponent ],
  providers: [ ProductService, ]
})

export class AppModule { }