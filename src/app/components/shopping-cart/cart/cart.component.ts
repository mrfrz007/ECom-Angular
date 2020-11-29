import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItems = [];

  cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  // tslint:disable-next-line: typedef
  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product ) => {
      this.loadCartItems();
    })
  }

  // tslint:disable-next-line: typedef
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  // tslint:disable-next-line: typedef
  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price );
    });
  }
}
