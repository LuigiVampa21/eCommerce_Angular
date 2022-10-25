import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './shared/models/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

cart: Cart = { items: [] }
constructor(private cartService: CartService){ }

  ngOnInit(): void {
    this.cartService.cart
        .subscribe((_cart) => {
          this.cart = _cart;
        })
  }
}
