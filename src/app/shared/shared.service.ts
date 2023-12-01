// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private productListSubject = new BehaviorSubject<any[]>([]);
  productList$ = this.productListSubject.asObservable();
  

  updateProductList(products: any[]) {
    this.productListSubject.next(products);
  }


}
