console.log('Hello world!');

// STRING
const firstName: string = 'Bob';
// firstName = 'New name'; // Will throw compile time error since const is not reassignable
console.log(firstName);

let lastName: string = 'Bobsky';
lastName = 'Wayne'; // reassign is only possible if we define the variable with keyword "let"

// NUMBER
const age: number = 20;
const year: number = 2023;
console.log(year);

// BOOLEAN
const isValid: boolean = true;
const isGreaterThan: boolean = 20>10;

// ANY
let varOfTypeAny: any = 'Jill';
varOfTypeAny = false;
varOfTypeAny = 70;
varOfTypeAny = {};
varOfTypeAny = null;
let numberVariable: number = 100;

let arrayVariable: any = [1,2,3,4,5];
// console.log(arrayVariable.length); // Will compile successfully
// console.log(varOfTypeAny.length); // Will throw a runtime error and break the code since length does not exist on type number/null/undefined/object etc.
// console.log(numberVariable.length); // Will throw compile time error since we have defined the type af the variable as a number
let currentYear = 2023;



// UNKNOWN
let variableOfTypeUnknown: unknown = "This variable has type 'unknown' and requires type checks";

// We need to do type checking before executing the code, otherwise compiler will complain because it doen not know of which type is the variable
if (typeof variableOfTypeUnknown === "string") {
    const lengthOfUnknown: number = variableOfTypeUnknown.length; // Type-safe operation
    console.log(lengthOfUnknown); // Output: 57
}

// ARRAY & UNUON TYPES
const favoriteFruits: string[] = ['strawberry', 'banana', 'orange'];
const favoriteNumbers: number[] = [1, 7, 10];
const bucketList: Array<string> = ['bread', 'milk'];
const mixedArray: Array<string | number[]> = ['Bob', [20]];
const mixedArray1: (string | number[])[] = ['Bob', [20]];
// const students: {firstName: string, lastName: string, age: number}[] = [{firstName: 'Jill', lastName: 'Wayne', age: 30}];
const students: Person[] = [{firstName: 'Jill', lastName: 'Wayne', age: 30}];

let yearTwo: string | number = 2023;
yearTwo = '2023';

// INTERFACE
interface Person {
    firstName: string;
    lastName: string;
    age: number
}

interface Employee extends Person {
    jobTitle: string;
    salary: number;
    employmentDate?: Date
}

const johnDoe: Employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
    jobTitle: 'Cleaner',
    salary: 30000,
    employmentDate: new Date('2021-01-01')
}

// TYPE ASSERTION
let bobBobsky = {} as Employee;

interface Circle {
    kind: 'circle';
    radius: number
}

type Rectangle = {
    kind: 'rectangle';
    width: number;
    height: number
}

type Shape = Circle | Rectangle;

// Method 1
// function calculateArea (shape: Shape): number {
//     if (shape.kind === 'circle') {
//         return Math.PI * shape.radius ** 2;
//     }
//     if (shape.kind === 'rectangle') {
//         return shape.width * shape.height
//     }
//     return 0;
// }

// Method 2
const calculateArea = (shape: Shape): number => {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height
    }
    return 0;
}

// ENUM 
enum PaymentMethod {
    CASH = 'cash',
    CARD = 'card',
    CHECK = 'check'
}

const selectPaymentMethod = (paymentMethod: PaymentMethod): PaymentMethod | string | undefined => {
    if (paymentMethod === PaymentMethod.CASH) {
        return 'The payment method is cash';
    }
    return paymentMethod;
}




