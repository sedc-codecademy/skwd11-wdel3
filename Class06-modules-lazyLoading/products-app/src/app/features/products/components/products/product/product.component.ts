import { Component, Input } from '@angular/core';
import { Product } from 'src/app/features/products/interfaces/product.interface';
import { ProductsService } from 'src/app/features/products/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  constructor(private readonly productService: ProductsService){}

  @Input()
  productObj: Product;

  onBuyProduct(productId: number): void {
    // console.log(productId);
    this.productService.buyProduct(productId);
  }
}
