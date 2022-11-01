import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  API_URL_STORE = environment.STORE_BASE_URL;
  constructor(private http: HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc', category?:string  ): Observable<Product[]>{
    return this.http.get<Product[]>(`
    ${this.API_URL_STORE}/products${category ? '/category/' + category : ''}?sort=${sort}&limit=${limit}`)
  }

  getAllCategories(): Observable<string[]>{
    return this.http.get<string[]>(`${this.API_URL_STORE}/products/categories`)
  }
}
