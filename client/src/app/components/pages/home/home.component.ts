import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols = 3;
  category: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  columnsCount(colsNum:number):void{
    this.cols = colsNum;
  }

  getCategory(newCategory:string){
    this.category = newCategory;
  }

}
