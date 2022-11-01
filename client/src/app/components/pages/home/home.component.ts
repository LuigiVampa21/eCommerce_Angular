import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/shared/models/product.model';

const ROWS_HEIGHT: { [id:number]:number } = {1: 400, 3: 335, 4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category!: string;
  products!: Product[];
  count = '12';
  sort= 'desc';
  productSub!: Subscription;

  constructor(private cartSerivce: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct():void{
    this.productSub = this.storeService.getAllProducts(this.count,this.sort)
        .subscribe((_products) => {
          this.products = _products;
        })
  }

  columnsCount(colsNum:number):void{
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  getCategory(newCategory:string){
    this.category = newCategory;
  }

  onAddToCart(product:Product): void{
    this.cartSerivce.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe()
  }

}
