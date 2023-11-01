//-----------------DOM-MANIPULATION-------------------
// We can traverse All our html elements create, add or remove with DOM stands for Document Object Model. With that Means when the our *.html renders in the browser, it renders it as document object.

// Their are many ways to traverse the DOM. But here we disscuss the most important 14 methods/properties to interact with the DOM.

// The structure of the DOM is from html>head>title>body>elements(tags like p h2)

// 1. append -> we can add strings to the document.
// 2. appendChild -> only append elements i.e. div spans anchor tags etc...
// 3. createElement -> used to create html element or node from the javascript.

// 4. innerText or textContent To add Text inside our html element,

// 5. innerHTML -> we can add/modifies html element from javascript.

//-----------------DOM-MANIPULATION-------------------

const body = document.body;

body.append("Hello To The Future", "2nd", "3rd"); // as a string and also pass multiple strings.

//body.appendChild("hey their"); // It does not show because it only appends nodes elements span div etc...

const div = document.createElement("div");
// body.append(div); // * this will create html non-semantic div element.

body.appendChild(div);
// to add text inside this div, we need to
// div.innerText = "Never settles for less";
div.textContent = "changed to love";

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

const em = document.createElement("em");
em.innerText = "Hello to em element";
body.append(em);
