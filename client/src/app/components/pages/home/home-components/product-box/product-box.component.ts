import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  product: Product | undefined = {
    id: 1,
    title: 'Sneackers',
    price: 150,
    category: 'Shoes',
    description: 'Description',
    image: 'https://via.placeholder.com/150',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void{
    this.addToCart.emit(this.product)
  }

}
