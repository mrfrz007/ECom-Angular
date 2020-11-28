import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


import {CartComponent} from './components/shopping-cart/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },

  { path: 'shop', component: ShoppingCartComponent },
  { path: 'cart', component: CartComponent },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
