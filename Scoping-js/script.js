'use strict';
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     //printAge() is a child element of calcAge(), but it has access to other variabls in it outer scope, e.g, const firstName = 'Jonas';
//     //firstName is Jonas here because "steven" is not in the current scope of "output"
//     let output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       //Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       //Reassigning outer scope's variable
//       output = 'New output';

//       //firstname is "steven" because it is in the same code block as "str"
//       const str = `oh, and you are a millenial, ${firstName}`;
//       //but it works here because it is inside it code block
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //console.log(str) will not work here because it is outside it code block, except the variable is declared with a "var"
//     //console.log(str);
//     //console.log(millenial) works here because we declared the variable "millenial" with a "var"
//     console.log(millenial);
//     //Works without "use strict"
//     //add(2, 3);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// //Only an inner scope can have access to the variables of its outer scope, so console.log(age) can't have access to the inner scope of calcAge(),
// //console.log(age);
// //Same goes for printAge()

// //Variables
// console.log(me);
// //console.log(job);
// //console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = '1991';

// //Functions
// console.log(addDec(2, 3)); //Only function declaration works before declaration
// //console.log(addExpr(2, 3));
// //console.log(addArrow(2, 3));

// //Function Declarations
// function addDec(a, b) {
//   return a + b;
// }

// //Function Expression
// const addExpr = function (a, b) {
//   return a + b;
// };

// //Arrow function
// var addArrow = (a, b) => a + b;

// //Example
// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All product deleted');
// }

// var x = 1;
// //Object declared with let and const cannot be found on the global window object
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// //BEST PRACTICES
// // 1. Do not use var to declare variables
// // 2. Use let if you need to change the value of your variable later
// // 3. Always declare your variables first at the top of your code for cleaner code
// // 4. Always declare your functions first before calling them
// // 5. Never use an Arrow function as a method in an object.
// // 5. Do not use "this" keyword for arrow functions in objects, because an arrow function inherits the "this" keyword from it parent scope.
// console.log(this);

// const carlcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// carlcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   carlcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.carlcAge();

// const matilda = {
//   year: 2017,
// };

// // To show that the "this" keyword only works on the object that picks it.
// matilda.carlcAge = jonas.carlcAge;
// matilda.carlcAge();

//var firstName = 'matilda';
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//Solving th problem of "this" when you have a function in another function

//Solution 1
// "this" as in jonas
// const self = this; // We can use self or that
// const millenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
//   //console.log(this.year >= 1981 && this.year <= 1996 );
// };
// millenial();

//   const millenial = () => {
//     console.log(this);
//     console.log(this.year >= 1981 && this.year <= 1996);
//     //console.log(this.year >= 1981 && this.year <= 1996 );
//   };
//   millenial();
// },
// "this" doesn't work on arrow objects, it simply goes for the "this" keyword of it parent scope
// greet: function () {
//   console.log(this);
//   console.log(`Hey ${this.firstName}`);
// },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// //Argument keyword
// //Argument keyword is used to add more arguments to a parameter
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// //But "argument" keyword doesn't work on arrow functions.
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

//Primitive type value copying
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'davies';
console.log(lastName, oldLastName);

//Reference type value copying
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
//When a variable is copied to another variable, when changes are made to the copied value, it changes in the original value also.
marriedJessica.lastName = 'Davis';
console.log('before marriage', jessica);
console.log('After marriage', marriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
//It works fine here if we use Object.assign,but, there's still problem, if we change the value of the child array of the original object from the copied, it affects the original.
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davies';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// It adds "Mary", "john" to the original variable, which we don't want
console.log('before marriage', jessica2);
console.log('After marriage', jessicaCopy);
