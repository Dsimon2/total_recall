// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

// console.log(firstVariable); //1

// const yourName = "Ariel";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

//BOOLEANS

// const a = 4; 
// const b = 53; 
// const c = 57; 
// const d = 16; 
// const e = 'Kevin';

// console.log(a < b); 
// console.log(c > d); 
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false); 
// console.log(false && false && false && false && false || true); 
// console.log(false === false) 
// console.log(e == 'Kevin'); 
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
// let animal = "cow";

// const moo = (a) => {
//    return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
// } 

// console.log(moo(animal));
// //Driver's Ed

// let age = 18; 

// if (age >= 16) {
//   console.log("Here are the keys!");
// } else {
//   console.log("Sorry, you're too young.");
// }

// //LOOPS
// // Remember: USE letwhen you initialize your for loops!
// for(let i = 0; i < 100; i++);
// ****************************************************************************************************

// //The Basics

// // Write a loop that will print out all the numbers from 0 to 10, inclusive
// for(let i=0; i <= 10; i++);
// console.log(i)
// ****************************************************************************************************
// // Write a loop that will print out all the numbers from 10 up to and including 400
// for(let i=10; i<=400; i++);
// console.log(i)
// ****************************************************************************************************
// // Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i <= 4000; i += 3) {
//   console.log(i);
// }
// ****************************************************************************************************

// //Get Even
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " <-- is an even number");
//   } else {
//     console.log(i);
//   }
// }
// ****************************************************************************************************

// //Give Me 5
// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("I found a " + i + ". Three is a crowd. High five!");
//   } else if (i % 3 === 0) {
//     console.log("I found a " + i + ". Three is a crowd");
//   } else if (i % 5 === 0) {
//     console.log("I found a " + i + ". High five!");
//   }
// }
// ****************************************************************************************************

//Savings Account
let bank_account = 0; 

for (let i = 1; i <= 10; i++) {
  bank_account += i; }

console.log(bank_account); 
// ****************************************************************************************************
// Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
let sumMultipliedByTwo = 0; 

for (let i = 1; i <= 100; i++) {
  sumMultipliedByTwo += i * 2; 
}

console.log(sumMultipliedByTwo); 
// ****************************************************************************************************

//ARRAYS & CONTROL FLOW

// A. Talk about it:
// What are the things in an array called? Do Arrays guarantee those things will be in order? 
// What real-life thing could you model with an array?

// The things in an array are called elements. 
// Arrays do not guarantee that the elements will be in order, unless you specifically sort them. 
// A real-life thing you could model with an array is a list of items, such as a grocery list, a to-do list, or student grades.
// ****************************************************************************************************

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
var quotes = ["Practice makes perfect.", 
"If you can dream it, you can do it.", 
"You can achieve it if you believe it."];

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
const randomThings = [1, 10, "Hello", true];
const firstElement = randomThings[0];
console.log(firstElement);

// Change the value of "Hello" to "World"
// Check the value of the array to make sure it updated the array using console.log()
const randomThings1 = [1, 10, "Hello", true];
randomThings1[2] = "World";
console.log(randomThings1);  


// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array? 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
const thirdElement = ourClass[2];
console.log(thirdElement); // Output: "Sardine"

// Change the value of "Github" to "Octocat" Add a new element, "Cloud City" to the array
ourClass[4] = "Octocat";
console.log(ourClass); // Output: ["Salty", "Zoom", "Sardine", "Slack", "Octocat"]

// E. Mix It Up
// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.


// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse().
// Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

const myArray = [5, 10, 500, 20];

myArray.push("Aegon");
myArray.push("Hello");

myArray.shift();

myArray.unshift("Bob Marley");

myArray.pop();

myArray.reverse();

console.log(myArray);

// Mutating an array means modifying the array itself, changing its elements, order, or length. 
// In this case, the array is mutated by adding and removing elements, as well as reversing its order.

// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... else statement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s "big number" if the number is greater than or equal to 100.

const number = 75;

if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// G. Monkey in the Middle
// Write an if ... else if ... else statement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

const number1 = 7;

if (number1 < 5) {
  console.log("little number");
} else if (number1 > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.






//OBJECTS



// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)


