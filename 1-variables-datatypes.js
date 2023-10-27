// --------- What are variables in any Programming Language or in JavaScript

// Variables are like boxes in which we put some data and then later on we use it again,
// modifies it and so on. its used to organize things in a better way.
// In real world, when go to a market or mall we need a bag or cart to put items in the bag to carry on and later when we need something inside of this bag we used those items or add more them and much more.
// we can declere variables in javascript by using three keywords var, let and const.

// --------- What are variables in any Programming Language or in JavaScript


const myName = "John";
let  myAge = 24;
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
const person = { // object
firstName: "john",
lastName: "smith",
email: "abc@gmail.com", 
}
const colors = ["red", "green", "blue"]; // array of colors
const date = new Date(); // Date Built in Object.

console.log(typeof personName);
console.log(typeof age);
console.log(typeof is_active);
console.log(typeof message);
console.log(typeof person);
console.log(typeof colors);
console.log(typeof date);
console.log("Your First Name is " + person.firstName + " Your LastName is " + person.lastName);
// We can concatenate two string in javascript with help of + operator.