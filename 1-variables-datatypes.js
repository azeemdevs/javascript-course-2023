// --------- What are variables in any Programming Language or in JavaScript

// Variables are like boxes in which we put some data and then later on we use it again,
// modifies it and so on. its used to organize things in a better way.
// In real world, when go to a market or mall we need a bag or cart to put items in the bag to carry on and later when we need something inside of this bag we used those items or add more them and much more.
// we can declere variables in javascript by using three keywords var, let and const.

// Also Disscuss, About Javascript Hoisting.

// --------- What are variables in any Programming Language or in JavaScript
const myName = "John";
let myAge = 24;
var myHairColor = "black";

// ------------ Data Types -------------------

// Their are eight data types in Javascript.
// 1. String. (sequence of characters surrounded by quotes)
// 2. Number.(integer)
// 3. bigint (introduced in es2020)
// 4. Boolean. (i.e. true or false)
// 5. Null. (i.e. null special data type means a variable that has vale of nothing)
// 6. Undefined.
// 7. Symbol.
// 8. object => non-premitive (Complex) array, date , Objects.
//

// ------------ Data Types -------------------

const personName = "John Smith"; // string
var age = 24; // number or int
let is_active = false; // boolean
var message = null; // null
const person = {
  // object
  firstName: "john",
  lastName: "smith",
  email: "abc@gmail.com",
};
const colors = ["red", "green", "blue"]; // array of colors
const date = new Date(); // Date Built in Object.

console.log(typeof personName);
console.log(typeof age);
console.log(typeof is_active);
console.log(typeof message);
console.log(typeof person);
console.log(typeof colors);
console.log(typeof date);
console.log(
  "Your First Name is " +
    person.firstName +
    " Your LastName is " +
    person.lastName
);

const calc = 1 / 0;

// console.log(isNaN(calc));

// We can concatenate two string in javascript with help of + operator.

// ----------- Pass By Value Vs Pass by Reference --------

// When we assign a variable a value by = assignment operator which we will disscuss later it will create new location in the memory and when we assign it to another variable it will also create the own new address in memory so we can say that variables are passed by value and properties are passed by reference. in the example below down.

// ----------- Pass By Value Vs Pass by Reference --------

var x = 20;
var y = x;
x = 4;
console.log(x); // it has their own address and pass by value to y.
console.log(y); //  it will create its own memory address in space.

//------------- Hoisting in JavaScript --------------------

// Hoisting is the default behaviour of the javascript which means all the variables and function decleartions are moved to the top of the scope. It means that irrespective of the where the variables and functions are declared, they are moved on top of the scope and this scope can local or global scope.

// To avoid the hoisting or default behaviour  at the top of the script.
//------------- Hoisting in JavaScript --------------------

gender = "male";

console.log(gender); // if you use "use strict on the top it will throw an error because it is not defined yet. this will allow developers to reduce minor errors"
var gender;
