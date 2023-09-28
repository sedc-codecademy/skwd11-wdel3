import { Product } from "../interfaces/product.interface";

export const products: Product[] = [
    {
      id: 1,
      name: 'Organic Apples',
      price: 2.99,
      quantity: 50,
      description: 'Fresh, organic apples picked from local orchards. Perfect for snacking or making homemade pies.',
      expirationDate: new Date('2023-09-30'),
      available: true
    },

    {
      id: 2,
      name: 'Salmon Fillets',
      price: 12.49,
      quantity: 20,
      description: 'Premium salmon fillets sourced from sustainable fisheries. Great for grilling or baking.',
      expirationDate: new Date('2023-09-25'),
      available: true
    },

    {
      id: 3,
      name: 'Organic Spinach',
      price: 3.99,
      quantity: 30,
      description: 'Certified organic spinach leaves, packed with nutrients. Ideal for salads or smoothies.',
      expirationDate: new Date('2023-09-28'),
      available: false
    },

    {
      id: 4,
      name: 'Artisanal Olive Oil',
      price: 8.99,
      quantity: 15,
      description: 'Small-batch, extra virgin olive oil with a rich, fruity flavor. Perfect for dipping or drizzling.',
      expirationDate: new Date('2024-02-15'),
      available: true
    },

    {
      id: 5,
      name: 'Gourmet Chocolate Truffles',
      price: 15.99,
      quantity: 50,
      description: 'Handcrafted chocolate truffles made with the finest cocoa. A delightful treat or gift.',
      expirationDate: new Date('2023-10-15'),
      available: true
    },

    {
      id: 6,
      name: 'Freshly Roasted Coffee Beans',
      price: 9.99,
      quantity: 40,
      description: 'Locally roasted coffee beans with a rich and aromatic flavor. Perfect for coffee enthusiasts.',
      expirationDate: new Date('2023-11-10'),
      available: false
    },
    
    {
      id: 7,
      name: 'Organic Honey',
      price: 6.49,
      quantity: 25,
      description: 'Pure, organic honey harvested from local bee farms. A natural sweetener and health remedy.',
      expirationDate: new Date('2023-12-31'),
      available: true
    },
    
    {
      id: 8,
      name: 'Handcrafted Wooden Chess Set',
      price: 34.99,
      quantity: 10,
      description: 'Beautifully crafted wooden chess set for hours of strategic gameplay. A collector\'s item.',
      expirationDate: new Date('2024-12-31'), // Example date set to one year from now
      available: true
    },
    
    {
      id: 9,
      name: 'Organic Quinoa',
      price: 5.99,
      quantity: 20,
      description: 'High-quality organic quinoa, a versatile and nutritious grain for various culinary creations.',
      expirationDate: new Date('2024-03-31'),
      available: true
    },
    
    {
      id: 10,
      name: 'Scented Soy Candles - Lavender',
      price: 7.99,
      quantity: 30,
      description: 'Soy candles infused with the calming scent of lavender. Perfect for relaxation.',
      expirationDate: new Date('2026-08-15'),
      available: true
    }
  ];
