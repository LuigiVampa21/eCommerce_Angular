import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit {

  @Output() columnsChange = new EventEmitter<number>();

  sort = '';
  itemsCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSort(sort:string){
    this.sort = sort;
  }

  onItemsUpdated(count:number):void{
    this.itemsCount= count;
  }

  onColumnsUpdated(colsNum: number):void{
    this.columnsChange.emit(colsNum)
  }

}
