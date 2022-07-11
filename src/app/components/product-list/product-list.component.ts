import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/services/product.service';
//import { ProductService } from 'src\app\services\product.service.ts';

@Component({
  
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  categories: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void {
    this.productService.readAll()
      .subscribe(
        (        categories) => {
          
          this.categories = categories;
          console.log(categories);
        },
        (        error) => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

  setCurrentProduct(product: null, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  deleteAllProducts(): void {
    this.productService.deleteAll()
      .subscribe(
        (        response) => {
          console.log(response);
          this.readProducts();
        },
        (        error) => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.productService.searchByName(this.name)
      .subscribe(
        (        categories) => {
          this.categories = categories;
          console.log(categories);
        },
        (        error) => {
          console.log(error);
        });
  }
}
