import { Product } from './../types/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productList: Product[] = [
  {
    id: 1,
    name: "Galaxy A13",
    price: 125000,
    steps: 5,
    img_path: "path"
  },{
    id: 2,
    name: "Galaxy A13",
    price: 125000,
    steps: 5,
    img_path: "path"
  },
  {
    id: 3,
    name: "Galaxy A13",
    price: 125000,
    steps: 5,
    img_path: "path"
  },
  {
    id: 4,
    name: "Galaxy A13",
    price: 125000,
    steps: 5,
    img_path: "path"
  },
]
  constructor() { }
}
