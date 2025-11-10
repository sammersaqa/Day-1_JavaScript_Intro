// alert("JS IS WORKING!!!");

console.log("This is a message for javascript.js")

// This is how we would declare a variable in C#
//  string myName ="Sammer";

// JS is a loosely typed programming language
// We use the let prefix to declare when we would need to change the variable later
let myName = "Sammer";
let lastName = "Saqa";
let myInt = 37; // This is an integer
let myBool = true; // This is a boolean
let myNull = null; // This is a null value

myName = "Sam";

// You can use the const to prevent reassignment of the variable
const pi = 3.14;
// pi = 4;

console.log(`Hello ${myName} ${lastName}, You are ${myInt} years old!`);
console.log( myInt + pi);
console.log(`${myName} ${myInt}`); // JS will convert the integer to a string and concatenate
console.log(myName + " " + lastName); // Concatenation in JS
console.log(`Fullname: ${myName} ${lastName}`); // Template literals in JS (ES6)

let myArray = [1, 2, 3, 4, "five", true];

console.log( myArray );

let myElement = document.getElementById("myElement");
console.log(myElement);
myElement.textContent = "I changed the text from JS! ";

// This is a comment in my app js on sams branch