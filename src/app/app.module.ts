
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './change/main/main.component';
import { ListComponent } from './change/list/list.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './change/detail/detail.component';
import { HeaderComponent } from './unchange/header/header.component';
import { FooterComponent } from './unchange/footer/footer.component';
import { PageNotFoundComponent } from './unchange/page-not-found/page-not-found.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    LoginComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
