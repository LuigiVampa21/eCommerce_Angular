import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart, CartItem } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  get cart():Cart{
   return this._cart
 }
  set cart(cart: Cart){
   this._cart = cart;

   this.itemsQuantity = cart.items.map((item) => item.quantity).reduce((curr,acc)=> curr + acc, 0);
  }

  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }


  getTotal(items: CartItem[]): number{
    return this.cartService.getTotal(items)
  }

  onRemoveShoppingCart(){
    this.cartService.clearCart();
  }

}
