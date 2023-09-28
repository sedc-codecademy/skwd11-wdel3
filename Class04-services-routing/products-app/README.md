# Angular Services Basics

This README.md file provides an introduction to the basic concepts of services in Angular.

## Table of Contents

- [Introduction](#introduction)
- [What are Services?](#what-are-services)
- [Why Use Services?](#why-use-services)
- [Creating a Service](#creating-a-service)
- [Injecting a Service](#injecting-a-service)
- [Using a Service](#using-a-service)
- [Singleton Pattern](#singleton-pattern)
- [Summary](#summary)
- [Resources](#resources)

## Introduction

Angular is a powerful JavaScript framework used for building dynamic web applications. One of the core concepts in Angular is the use of services to manage and share data, functionality, or logic across different components.

## What are Services?

Services in Angular are classes that are used to encapsulate and provide reusable functionality, data, or logic to different parts of an application. They act as a means of communication and coordination between components, allowing for the separation of concerns and promoting a modular architecture.

## Why Use Services?

Services offer several benefits in an Angular application:

- **Reusability:** Services allow you to write code once and use it across multiple components.
- **Separation of Concerns:** Services help separate business logic and data management from the UI components.
- **Singleton Pattern:** Services are typically instantiated as singletons, ensuring a single instance is shared across the application.
- **Dependency Injection:** Services can be injected into components, making it easier to manage component dependencies.
- **Testing:** Services can be easily tested in isolation, improving the overall testability of the application.

## Creating a Service

To create a service in Angular, you can use the Angular CLI or create a new TypeScript file manually. Here's an example of how to create a basic service using the Angular CLI:

```bash
ng generate service my-service
```

This will generate a `my-service.service.ts` file that you can edit to implement your service logic.

## Creating a Service with @Injectable Decorator

Assuming you have generated a service named `my-service` using the Angular CLI, here's how the service file (`my-service.service.ts`) might look with the `@Injectable` decorator:

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root", // This makes the service available at the root level
})
export class MyService {
  constructor() {}

  doSomething() {
    // Service logic here
    console.log("Service method executed.");
  }
}
```

## Including the Service in an Angular Module

To use the service in your application, you need to include it in an Angular module. Here's how you can include the `MyService` in an example module (`app.module.ts`):

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MyService } from "./my-service.service"; // Import the service

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [MyService], // Include the service in the providers array
  bootstrap: [AppComponent],
})
export class AppModule {}
```

By including the service in the `providers` array of your module, you make the service available throughout your application. The `providedIn: 'root'` option in the `@Injectable` decorator makes the service a singleton and automatically provides it at the root level.

Remember to import the service at the top of your module file and add it to the `providers` array as shown above.

## Additional Notes

- The `@Injectable` decorator is not strictly required for a service to work, but it's a best practice to include it. It enables optimizations in Angular's dependency injection system.

- When you use `providedIn: 'root'`, you don't need to include the service in the `providers` array of the module. Angular will automatically provide it at the root level.

- If you want to provide the service at a different level (e.g., within a specific component or lazy-loaded module), you can remove the `providedIn` option from the `@Injectable` decorator and include the service in the `providers` array of the respective module or component.

This completes the example of creating a service with the `@Injectable` decorator and including it in an Angular module. You can now use the `MyService` methods and functionality in your components throughout your Angular application.

## Injecting a Service

Services need to be injected into the components or other services that require their functionality. Angular's dependency injection system handles this automatically. To inject a service into a component, you need to specify the service as a constructor parameter:

```typescript
import { Component } from "@angular/core";
import { MyService } from "./my-service.service";

@Component({
  selector: "app-my-component",
  template: "...",
})
export class MyComponent {
  constructor(private myService: MyService) {}
}
```

## Using a Service

Once a service is injected into a component, you can use its methods and properties. For example:

```typescript
import { Component } from "@angular/core";
import { MyService } from "./my-service.service";

@Component({
  selector: "app-my-component",
  template: ` <button (click)="callServiceMethod()">Call Service</button> `,
})
export class MyComponent {
  constructor(private myService: MyService) {}

  callServiceMethod() {
    this.myService.doSomething();
  }
}
```

## Singleton Pattern

Angular services are typically created as singletons. This means that there is only one instance of the service throughout the application. When a service is injected into multiple components, they all share the same instance.

## Summary

Services are a fundamental concept in Angular that allow you to encapsulate and share functionality, data, or logic between components. They promote reusability, separation of concerns, and efficient communication within an Angular application.

## Resources

- [Angular Services Documentation](https://angular.io/guide/architecture-services)
- [Dependency Injection in Angular](https://angular.io/guide/dependency-injection)
- [Angular CLI Documentation](https://angular.io/cli)

Feel free to explore these resources for a deeper understanding of Angular services and their usage.

# Angular Routing

**Angular Router** is a powerful JavaScript router built and maintained by the Angular core team that can be installed from the @angular/router package.
It provides a complete routing library with the possibility to have multiple router outlets, different path matching strategies, easy access to route parameters and route guards to protect components from unauthorized access.

In a single-page app, you change what the user sees by showing or hiding portions of the display that correspond to particular components, rather than going out to the server to get a new page. As users perform application tasks, they need to move between the different views that you have defined.

To handle the navigation from one view to the next, you use the Angular Router. The Router enables navigation by interpreting a browser URL as an instruction to change the view.

The Angular router is a core part of the Angular platform. It enables developers to build Single Page Applications with multiple views and allow navigation between these views.

In Angular, the best practice is to load and configure the router in a separate, top-level module. The router is dedicated to routing and imported by the root AppModule.

By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts in the src/app directory.

Run `ng generate module app-routing --flat --module=app` to create the application routing module.
--flat - Puts the file in src/app instead of its own directory.
--module=app - Tells ng generate to register it in the imports array of the AppModule.

### Route and paths

Route tells the Angular Router which view to display when a user clicks a link or pastes a URL into the browser address bar. Every Route consists of a path and a component it is mapped to. The Router object parses and builds the final URL using the Route.
The path refers to the part of the URL that determines a unique view that should be displayed, and component refers to the Angular component that needs to be associated with a path. Based on a route definition that we provide (via a static RouterModule.forRoot(routes) method), the Router is able to navigate the user to a specific view.

Each Route maps a URL path to a component.

The path can be empty which denotes the default path of an application and it’s usually the start of the application.

The path can take a wildcard string (\*\*). The router will select this route if the requested URL doesn’t match any paths for the defined routes. This can be used for displaying a “Not Found” view or redirecting to a specific view if no match is found.

This is an example of a route:

`{ path:  'contacts', component:  ContactListComponent}`
If this route definition is provided to the Router configuration, the router will render ContactListComponent when the browser URL for the web application becomes /contacts.

### Routes

Routes is an array of Route objects our application supports

### The router-outlet

The outerOutlet is a directive (`<router-outlet>`) that serves as a placeholder, where the Router should display the view (insert a component) that gets matched based on the current browser’s URL.
You can add multiple outlets in your Angular application which enables you to implement advanced routing scenarios.
`<router-outlet></router-outlet>`

### RouterLink

The RouterLink is a directive that binds the HTML element to a Route. Clicking on the HTML element, which is bound to a RouterLink, will result in navigation to the Route. The RouterLink may contain parameters to be passed to the route’s component.
`<a [routerLink]="'/contacts'">Contacts</a>`

### RouterLinkActive

RouterLinkActive is a directive for adding or removing classes from an HTML element that is bound to a RouterLink. Using this directive, we can toggle CSS classes for active RouterLinks based on the current RouterState.

### ActivatedRoute

The ActivatedRoute is an object that represents the currently activated route associated with the loaded Component.

### RouterState

The current state of the router includes a tree of the currently activated routes together with convenience methods for traversing the route tree.

### Route params

It is an array that you can bind to RouterLink directive or pass it as an argument to the Router.navigate method.
Creating routes with parameters is a common feature in web apps. Angular Router allows you to access parameters in different ways:

You can create a route parameter using the colon syntax. This is an example route with an id parameter:
`{ path:  'contacts/:id', component:  ContactDetailComponent}`

[Angular Routing Documentation](https://angular.io/api/router)
