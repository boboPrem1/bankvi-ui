import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: any;

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<any> {
    const response = await this.authService.getProductList();
    this.productList = response.data;
  }
}
