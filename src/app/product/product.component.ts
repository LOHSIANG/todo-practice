import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  ProductList: any;
  filteredProductList: any;
  searchTerm: string = '';
  originalProductList: any = [];
  

  constructor(private productService: ProductsService,){
    this.getProduct();
  }

  ngOnInit(): void {
    
  }

  getProduct() {
    this.productService.getProduct().subscribe((result) => {
      this.ProductList = result;
    });
  }

  searchProduct() {
    const searchTerm = this.searchTerm.toLowerCase();
    
    if (searchTerm.trim() !== '') {
          this.originalProductList = this.getProduct();
          this.filterProducts(searchTerm);
    } else {
        this.ProductList = this.getProduct();
    }
  }
  

  filterProducts(searchTerm: string) {
    this.ProductList = this.originalProductList.filter((product:any) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.price.toString().toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  }

}
