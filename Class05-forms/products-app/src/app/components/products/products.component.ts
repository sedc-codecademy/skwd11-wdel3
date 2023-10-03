import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { LoggerService } from 'src/app/services/logger.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor( 
    private readonly productService: ProductsService,
    private readonly loggerService: LoggerService,
    private readonly router: Router 
    ){}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();

    if (this.products.length === 0) {
      this.loggerService.logError('no products found');
    } else {
      this.loggerService.logAction('products fetched');
      console.log(this.products);
    }
  }

  backToHome(): void {
    this.router.navigate(['/home'])
  }
}
