import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get("https://fakestoreapi.com/products?limit=12")
  }
  
}
