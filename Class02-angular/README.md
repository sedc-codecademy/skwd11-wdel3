# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Angular Components

In Angular, components are the building blocks of an application's user interface. They encapsulate the logic, structure, and presentation of a specific part of the user interface. Components are typically organized in a hierarchical tree-like structure, where parent components can have child components.

How to create Angular component called `AppComponent`.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "My Angular App";
}
```

## Import and Export

In Angular, you use import and export statements to manage dependencies between modules and components. Importing allows you to access classes, functions, or values defined in other files, while exporting makes those items available to other parts of your application.

Create `Product` class in a file called `product.model.ts`

```typescript
export class Product {
  constructor(public id: number, public name: string, public price: number) {}
}
```

You can import and use this class in another file

```typescript
import { Product } from "./product.model";

const product = new Product(1, "Widget", 10.99);
console.log(product.name);
```

## String Interpolation

String interpolation is a feature in Angular that allows you to embed expressions within template strings. These expressions are evaluated and the result is inserted into the HTML template.

Component with a property called `message`

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-example",
  template: "<p>{{ message }}</p>",
})
export class ExampleComponent {
  message = "Hello, Angular!";
}
```

- In this example, `{{ message }}` is a string interpolation, and it will be replaced with the value of the message property when the component is rendered.

## Property Binding

Property binding in Angular allows you to set an element's property to the value of a component's property. It's typically used to dynamically update the properties of HTML elements.

Example:

```html
<input [value]="message" />
```

- In this example, the `value` property of the `input` element is bound to the `message` property of the component. Any changes to `message` will automatically update the input's value

## Event Binding

Event binding in Angular allows you to respond to events (e.g., button clicks, input changes) triggered by the user. You can bind methods from the component class to events in the template.

```html
<button (click)="sayHello()">Click me</button>
```

- When the button is clicked, the sayHello() method in the component class will be called.

## Two-Way Binding

Two-way binding is a combination of property binding and event binding. It allows you to bind a component property to an input element's value and respond to changes in both directions.

```html
<input [(ngModel)]="username" />
```

- Here, the `[(ngModel)]` directive binds the `username` property to the input's value, allowing changes to the input to update the property and vice versa. To use two-way binding, you need to import the `FormsModule` module.
