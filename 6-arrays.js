//------------- Array------------

// An Array is a special variable which can hold multiple values.

// Real World Example:
//  When you have 3 product items you store values in variables but if its more than 1000 than what whould you do now. the answer is Array.

// Syntax:

// const or let nameofvariable = [];

// [0] is the first element. [1] is the second element. and so no.
//------------- Array------------

const fruits = ["apple","orange","banana","pineApple","grapes"];

const flength  = fruits.length;

// for(let i=0; i<flength; i++){
//     console.log(fruits[i]);
// }


const colors = [];
colors[0] = "red";
colors[1] = "green";
colors[2] = "blue";
colors[3] = "yellow";


// Alternative Way via new javascript keyword
const brands = new Array("samsung","apple","huawei","nokia");


const languages = ["javascript","php","python","java","rails","c"];
languages[4] = "ruby";

const strLanguages = languages.toString();
// console.log(typeof languages);// object


const capitals = {
    pakistan: "islamabad",
    germany: "berlin",
    italy: "rome",
    india: "new Delhi",
    Bangladesh: "Dhaka"
}


const numbers = [2,5,7,3,11,88,5,44,3];


// odd numbers

// numbers.forEach(function(number){
// if(number % 2 !== 0){
//     console.log(number);
// }
// });

//even numbers

// numbers.forEach(function(number){
//     number % 2 === 0 ? console.log(number) : '';
// });

// console.log(languages[5]);
// console.log(languages[languages.length - 1]);
// console.log(languages.sort());
// console.log(languages.length);
// console.log(capitals);
// console.log(capitals.germany);
// console.log(brands[3]);
// console.log(fruits);
// console.log(colors[2]);
// fruits.forEach(function(value){
//   console.log(value);
// });

const usernames = ["john","mickel","russel","hafeez","julia","hao"];

usernames.push("esrabilgic"); // add element at the end of array
usernames.pop(); // removes element at the end of array
usernames.shift() // removes element from the first of array
usernames.unshift("haleema")// add element at the start of an array

// console.log(usernames);
// console.log(usernames instanceof Array);