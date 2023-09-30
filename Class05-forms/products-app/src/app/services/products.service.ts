import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { products as ourProducts } from '../db/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private PRODUCTS: Product[] = ourProducts;

  getAllProducts = (): Product[] => {
    return this.PRODUCTS;
  }

  buyProduct = (productId: number): Product | undefined | null => {
    const foundProduct = this.PRODUCTS.find(p => p.id === productId);

    if (foundProduct && foundProduct.quantity > 0 ) {
      foundProduct.quantity -=1;
      return {...foundProduct};
    }
    return;
  }

}
