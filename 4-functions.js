//------------------Function-----------------

// A function is a block of code that is called to perform a specific task.

// A function has a local scope means a variable declared inside the function cannot be accessed from outside of the function.

// The benefit of using function is its resuseablity means we put some code that is common in our source code and we can call the function later on whenever we need it.


// The return keyword is generally used at the end of a function when we want to return the result outside back of function from where it is called. after the return keyword anything written down is not gonna work ina function.

// Syntax:
// function nameofFunc(parem1, parem2){

// }
//------------------Function------------------

function myName(){
    console.log("John Wick");
}
// myName();
// myName();
// myName();

function mul(x,y){
    return x*y;
}
// mul(5,5);

function sumNumbers(a,b = 10){
    return a + b;
}

let total = sumNumbers(2);
// console.log(total);

// this is the IIFE (immediate invoked function expression)
(function getName(){
    console.log("hello world!");
}()) 

//---------- Parameters and Arguments------------

//  Parameters are basically the input values.
//  Arguments are basically the values that we provide to input values.

//  When we define a function inside pair of parentheses we write parameters... seperated by commas, and it function call we provide arguments that passes to parameters.

// These terms are ofton used interchangeably so dont get confused but technically that is the difference.


// we can also provide default values to parameters when an argument is not passed.
//---------- Parameters and Arguments------------



// ----------- SCOPES------------

//  The keyword var let and const have different scopes.

//  const => for constant means its value cannot be assigned again after decleration.

//  let => its value can be assigned again and changed but it has block scope also. because if its written in conditions curly barces the variable cannot be available outside and it says undefined.

//  var => var it has a local and Global scope unlike its is available because it does not have block scope. mostly used let and const.

// ---------- SCOPES-------------