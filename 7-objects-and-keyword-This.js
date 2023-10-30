// ------------- Objects and this keyword-------------

// this keyword reference to the current object. By default this keyword references to the window object

// Define Object ?

// An Object is basically is a collection of properties(key and a value) and methods. A Property value might be a function and that function is the method.

// In Real Life, A pencil is an object with properties like, colorOfPencil, type like jelpen or somthing, sizeOfPoint etc...

// A prrperty may further have other properties and defined as an object of it.

// We can have prefine objects in the browser and also we can define our own objects.

// ------------- Objects and this keyword-------------

//console.log(this); // returns the window object

function getNameUser() {
  console.log("John Doe");
}
// it means we are attaching this function to the window object
//window.getNameUser();
console.log(this);

const persons = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  email: "John.Doe@example.com",
  married: false,
  getBio: function () {
    return "This is a method from the persons object";
  },
};

// console.log(persons.firstName); // John
// console.log(persons.getBio()); // gets method from persons object

// To Create Multiple Objects We Use Constructor function

function Mobile(brand, type, size, year) {
  this.mobileBrand = brand;
  this.ledType = type;
  this.size = size;
  this.year = year;
}

const obj1 = new Mobile("LG", "IPS", 6.0, 2019);
const obj2 = new Mobile("Samsung", "OLED", 5.6, 2020);
const obj3 = new Mobile("Apple", "XDR", 5.3, 2017);

//console.log(obj3);
