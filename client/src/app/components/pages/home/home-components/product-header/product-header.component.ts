import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit {

  sort = '';
  itemsCount!:number;

  constructor() { }

  ngOnInit(): void {
  }

  onSort(sort:string){
    this.sort = sort;
  }

}
