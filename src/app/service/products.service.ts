import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  apiurl = 'http://localhost:3000/products';

  getProducts(){
    return this.http.get(this.apiurl);
  }
}
