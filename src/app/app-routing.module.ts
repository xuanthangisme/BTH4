import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './unchange/page-not-found/page-not-found.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './change/list/list.component';
import { MainComponent } from './change/main/main.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { DetailComponent } from './change/detail/detail.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'list', component: ListComponent },
  { path: 'cart-detail', component: CartDetailComponent },
  { path: 'checkout', component : CheckoutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
