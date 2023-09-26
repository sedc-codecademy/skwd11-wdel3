import { AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit {

  products: Product[] = [
    {
      name: 'Organic Apples',
      price: 2.99,
      quantity: 50,
      description: 'Fresh, organic apples picked from local orchards. Perfect for snacking or making homemade pies.',
      expirationDate: new Date('2023-09-30'),
      available: true
    },
    {
      name: 'Salmon Fillets',
      price: 12.49,
      quantity: 20,
      description: 'Premium salmon fillets sourced from sustainable fisheries. Great for grilling or baking.',
      expirationDate: new Date('2023-09-25'),
      available: true
    },
    {
      name: 'Organic Spinach',
      price: 3.99,
      quantity: 30,
      description: 'Certified organic spinach leaves, packed with nutrients. Ideal for salads or smoothies.',
      expirationDate: new Date('2023-09-28'),
      available: false
    },
    {
      name: 'Artisanal Olive Oil',
      price: 8.99,
      quantity: 15,
      description: 'Small-batch, extra virgin olive oil with a rich, fruity flavor. Perfect for dipping or drizzling.',
      expirationDate: new Date('2024-02-15'),
      available: true
    },
    {
      name: 'Gourmet Chocolate Truffles',
      price: 15.99,
      quantity: 50,
      description: 'Handcrafted chocolate truffles made with the finest cocoa. A delightful treat or gift.',
      expirationDate: new Date('2023-10-15'),
      available: false
    }
  ];

  @Input()
  inputValue: string = '';

  // Is always called first, when component object is instantiated
  constructor(){
    console.log('Constructor called')
  }

  // Is called when component is initialized
  // If there is a constructor, ngOnInit is called immediately after the constructor
  // This component is used to write all the logic needed for the component to initialize properly
  ngOnInit(): void {
    console.log('NG ON INIT. Products component initialized');
  }

  // Does the final cleanup
  // Is called immediately before the component is destroyed (or we move to another component)
  ngOnDestroy(): void {
    console.log('NG ON DESTROY. Component destroyed');
  }

  // Is called after component view is initialized
  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW INIT');
  }

  // Is called when the component detects any change / not the same with ngOnChanges
  ngDoCheck(): void {
    console.log('NG DO CHECK');
  }

  // detects changes ONLY in the properties marked with @Input() decorator
  // Is called before ngOnInit and once a change in the @Input property is detected
  ngOnChanges(changes: SimpleChanges): void {
    console.log('NG ON CHANGES');
    console.log(changes);
    console.log('Input value: ', this.inputValue);
  }

}
