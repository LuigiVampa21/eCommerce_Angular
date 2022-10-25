import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';
import { Cart, CartItem } from '../shared/models/cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []})

  constructor(private _snackbar: MatSnackBar) { }

  addToCart(item: CartItem): void{
    const items = [...this.cart.value.items];
    const itemInCart = items.find(_item => _item.id === item.id);
    if(itemInCart){
      itemInCart.quantity += 1
    }
    items.push(item);

    this.cart.next({ items});
    this._snackbar.open('1 item added to cart', 'Ok', {duration: 3000})
    console.log(this.cart.value);
  }

  getTotal(items:Array<CartItem>):number{
    return items.map(item => item.price * item.quantity ).reduce((curr,acc) => curr + acc, 0)
  }

  clearCart(): void{
    this.cart.next({ items: []});
    this._snackbar.open('Cart is cleared.', 'Ok', {duration: 3000})
  }
}