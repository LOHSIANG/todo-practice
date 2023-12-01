import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  searchTerm: string = '';

  constructor() { }

  filterProducts(){
    const searchTerm = this.searchTerm.toLowerCase();
    if(searchTerm.trim() !== ''){
      return;
    }
  }


  ngOnInit(): void {
  }

}
