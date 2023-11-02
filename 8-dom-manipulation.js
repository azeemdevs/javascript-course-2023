//-----------------DOM-MANIPULATION-------------------
// We can traverse All our html elements create, add or remove with DOM stands for Document Object Model. With that Means when the our *.html renders in the browser, it renders it as document object.

// Their are many ways to traverse the DOM. But here we disscuss the most important 14 methods/properties to interact with the DOM.

// The structure of the DOM is from html>head>title>body>elements(tags like p h2)

// 1. append -> we can add strings to the document.
// 2. appendChild -> only append elements i.e. div spans anchor tags etc...
// 3. createElement -> used to create html element or node from the javascript.

// 4. innerText or textContent To add Text inside our html element,

// 5. innerHTML -> we can add/modifies html element from javascript.

// 6. remove() -> removes element from the dom.

// 7. getAttribute() -> gets the html element attribute.

// 8. setAttribute() -> sets the html element attribute.

// 9. removeAttribute() -> removes the html element attribute.

// 10. dataset -> get/set the data-property attribute.

// 11. style -> it will change the style property of element.

// 12. classList -> get the classList

// 13. add -> add the class to element.

// 14. remove -> remove the class from element

// 15. toggle -> toggle the class from element. on/off like a switch.
//-----------------DOM-MANIPULATION-------------------

const body = document.body;

// body.append("Hello To The Future", "2nd", "3rd"); // as a string and also pass multiple strings.

//body.appendChild("hey their"); // It does not show because it only appends nodes elements span div etc...

//const div = document.createElement("div");
// body.append(div); // * this will create html non-semantic div element.

// body.appendChild(div);
// to add text inside this div, we need to
// div.innerText = "Never settles for less";
// div.textContent = "changed to love";

//----- Difference b/w textContent & innerText

// * textContent prints out the all the spaceing or indentations or even styling set to display none while the innertext does not.

// just console.log() the elements and check that.

//----- Difference b/w textContent & innerText

//const testDiv = document.querySelector(".test");

// console.log(testDiv.textContent);
// console.log(testDiv.innerText);

// div.innerHTML = "<h1>Hey</h1>";
// div.innerText = "<h1>Hey</h1>"; // it will add it as a string not element.

// const h1 = document.querySelector("h1");

// h1.innerHTML = "changed to cooking"; // Modifies the text inside of tan html element.

// * The InnerhHTML has security issues because someone send malicious code to the website So alternatively use can use the innerText or textContent in by the other way i.e.

// const em = document.createElement("em");
// em.innerText = "Hello to em element";
// body.append(em);

const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanHello = document.querySelector("#hello");

// spanHi.remove(); // remove element from the dom.

// div.append(spanHi); // adds element to the DOM

// div.removeChild(spanHello);

// spanHi.setAttribute("title", "this is a span");
// console.log(spanHi.getAttribute("title"));

// console.log(spanHello.id); // get the attribute also.
// console.log((spanHello.title = "example")); //sets the attribute.

// spanHi.removeAttribute("title"); // removes the attribute.

// spanHello.dataset.newTheme = "crimson"; create the data attribute.

// console.log(spanHello.dataset); // gets the data attribute with its property

// spanHi.style.fontSize = "2rem";
// body.style.backgroundColor = "red";

spanHello.classList.add("hello"); // sets the class
spanHello.classList.remove("hello"); // remove the class

spanHi.addEventListener("click", () => {
  spanHi.classList.toggle("hello");
}); // when you click on hi it will on/off the class from the dom.

// -------- SELECTORS DOM AND EVENTS-------
// Their are almost 5 kinds of selectors to select the elements/classes fro the dom.
//    1. getElementById()
//    2. getElementsByClassName() -? returns collection [].
//    3. getElementByTagName() -> returns collection [].
//    4. querySelector()
//    5. querySelectorAll()

// we also seen events like click, dblclick, blur, keyup, mouseenter, mouseleave

// -------- SELECTORS DOM AND EVENTS-------

// const button = document.getElementById("clickme");
// const button = document.getElementsByClassName("btn");
const button = document.querySelector(".btn");
const heading = document.querySelector("h2");
const lists = document.querySelectorAll("ul li a");
// const collectionList = document.getElementsByTagName("li");
// heading.innerHTML = collectionList[2].innerHTML;

button.addEventListener("dblclick", () => {
  heading.classList.add("hello");
});

lists.forEach((list) => {
  list.addEventListener("click", () => {
    list.classList.toggle("green");
  });
});

const myImages = document.images;
const pTag = document.getElementById("demo");
let text = "";
for (let i = 0; i < myImages.length; i++) {
  text += myImages[i].src + "<br><hr>";
}
pTag.innerHTML = text;
