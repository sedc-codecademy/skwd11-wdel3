import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Truthy values
  truthyString = "Hello, World!";
  truthyNumber = 42;
  truthyArray = [1, 2, 3];
  truthyEmptyArray = [];
  truthyObject = { key: "value" };
  truthyEmptyObject = {};
  truthyBoolean = true;
  truthyDate = new Date();
  truthyRegExp = /pattern/;
  truthyFunction = () => {
  };
  arrValues = [0, 0, 2, 0, 3];

  // Falsy values
  falsyEmptyString = '';
  falsyZero = 0;
  falsyFalse = false;
  naNValue = NaN;
  // Nulish values
  nullValue = null;
  undefinedValue = undefined;


  ngOnInit(): void {
    // console.log('DOUBLE NEGATION OPERATORS - !!');
    // Double logical NOT operator - !!
    // Converts a value to a boolean depending on its truthy/falsy implicit value

    // console.log(this.truthyString);
    // console.log(!!this.truthyString);

    // console.log(this.falsyZero);
    // console.log(!!this.falsyZero);

    // console.log(this.truthyBoolean);
    // console.log(!this.truthyBoolean);
    // console.log(!!this.truthyBoolean);

    // console.log(this.naNValue);
    // console.log(!!this.naNValue);

    // console.log(!!this.truthyFunction);
    

    // console.log('NULLISH COALESCING OPERATORS - ??');
    // Nullish coalescing operator - ??
    // returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

    // console.log(this.truthyString ?? 'Default string');
    // console.log(this.falsyEmptyString ?? 'Default string');
    // console.log(this.nullValue ?? 'Default string');

    // let name; // undefined
    // console.log(name ?? 'Default string');


    // console.log('NULISH COALESCING ASSIGNMENT OPERATOR - ??=');
    // Nullish coalescing assignment operator - ??=
    // if the value of the variable is null or undefined then the value of the right-hand side operand will be assigned to the variable.
    // x ??= y  // Means : x ?? (x = y)

    // let x = 10;
    // let y = null;
    // let t;
    // let z = 20;
    // let e = null;
    // let f;

    // x ??= z;  // The value of x will not change because x is not nullish.
    // console.log(x); // 10

    // y ??= z; // The value of y will be changed because y is nullish.
    // console.log(y); // 20

    // t ??= z; // The value of t will be changed because y is nullish(undefined).
    // console.log(t); // 20

    // console.log(e ??= f);
    // console.log(e);

    
  }
}
