import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {

  @Output() showCategory = new EventEmitter<string>()
  categoriesSub!: Subscription;
  categories!:string[];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.initCategories();
  }

  initCategories(){
    this.categoriesSub = this.storeService.getAllCategories()
        .subscribe((categories:string[])=>{
          this.categories = categories
        })
  }

  onShowCategory(category: string):void{
    this.showCategory.emit(category)
  }

  ngOnDestroy(): void {
    this.categoriesSub.unsubscribe()
  }

}
