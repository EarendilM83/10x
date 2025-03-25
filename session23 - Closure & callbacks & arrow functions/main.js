// function outerFunction() {
//     let outerVar = "I'm from outer!";

//     function innerFunction() {
//         console.log(outerVar); // ✅ Still has access to outerVar
//     }

//     return innerFunction;
// }

// const myClosure = outerFunction(); // outerFunction runs and returns innerFunction
// myClosure(); // Outputs: "I'm from outer!"



// function createCounter() {
//     let count = 0; // Private variable

//     return function() {
//         count++; // Modify the outer variable
//         console.log(`Counter: ${count}`);
//     };
// }

// const counter = createCounter();
// counter(); // Counter: 1
// counter(); // Counter: 2z`
// counter(); // Counter: 3

// problem with var
// for (var i = 1; i <= 3; i++) {
//     setTimeout(function() {
//         console.log(i); // ❌ Unexpected output!
//     }, 1000);
// }

// // solution with let
// for (let i = 1; i <= 3; i++) {
//     setTimeout(function() {
//         console.log(i); // ✅ Expected output
//     }, 1000);
// }

// for (var i = 1; i <= 3; i++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(j); // ✅ Correct output!
//         }, 1000);
//     })(i); // Passing i to an IIFE
// }


function printMessage(callback) {
    console.log("Start");
    callback();
    console.log("End");
}

function sayHello() {
    console.log("Hello!");
}

printMessage(sayHello);


// function printLater(callback) {
//     console.log("Start");
//     setTimeout(callback, 1000); // runs after 1 second
//     console.log("End");
// }

// printLater(() => {
//     console.log("Hello from callback!");
// });


// setTimeout(function () {
//     console.log("This is an anonymous callback");
//   }, 1000);
  
// setTimeout(() => {
//     console.log("This is a shorter anonymous callback");
// }, 1000);
// "use strict";

// surname = "tusishvili";
// const greet = function() {
//     console.log("Hello");
// };

// const greetWithArrow = () => {
//     console.log("Hello");
// };

// // greet(); // Output: Hello


// const sayHi = () => {
//     console.log("Hi there!");
// };
// sayHi();

// const greetUser = name => {
//     console.log("Hello " + name);
// };
// greetUser("Nukri");


// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(2, 3)); // 5


// const multiply = (a, b) => a * b;
// console.log(multiply(4, 5)); // 20


// function greet(name) {
//     console.log("Hello " + name);
// }

// function processUser(callback) {
//     const name = "Morpheus";
//     callback(name); // greet("Morpheus")
// }

// processUser(greet);


// function multiplier(x) {
//     return function(y) {
//         return x * y;
//     }
// }

// const double = multiplier(2);
// console.log(double(5)); // 10

