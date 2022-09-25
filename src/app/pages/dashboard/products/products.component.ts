import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

productList: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.productList;
  }

}
