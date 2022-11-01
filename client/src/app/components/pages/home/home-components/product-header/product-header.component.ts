import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit {

  @Output() columnsChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = '';
  itemsCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSort(sort:string){
    this.sort = sort;
    this.sortChange.emit(sort)
  }

  onItemsUpdated(count:number):void{
    this.itemsCount= count;
    this.itemsCountChange.emit(count)
  }

  onColumnsUpdated(colsNum: number):void{
    this.columnsChange.emit(colsNum)
  }

}
