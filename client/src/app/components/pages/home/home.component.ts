import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: { [id:number]:number } = {1: 400, 3: 335, 4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  columnsCount(colsNum:number):void{
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  getCategory(newCategory:string){
    this.category = newCategory;
  }

}
