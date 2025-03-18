// function CoffeeMachine(){
//     console.log("Coffee Machine is starting");
// }

// function makeTea(){
//     console.log("Making Tea");
// }

// function makeSandwich(){
//     console.log("Making Sandwich");
// }


// function CoffeeMachine() {
//     console.log("Coffee Machine is starting...");
// }

// // Calling the function
// CoffeeMachine();


// function greet() {
//     console.log("Hello!");
// }

// console.log("Before function call");
// greet();
// console.log("After function call"); 

// function sayHello(){
//     console.log("Hello, World!");
// }

// sayHello();


// function orderPizza(topping) {
//     console.log("You ordered a pizza with " + topping);
// }

// orderPizza("pepperoni"); // Output: You ordered a pizza with pepperoni
// orderPizza("mushrooms"); // Output: You ordered a pizza with mushrooms


// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// greet("Morpheus"); // Output: Hello, Morpheus!
// greet("Neo"); // Output: Hello, Neo!


// function greet(name = "Morpheus") {
//     console.log("Hello, " + name + "!");
// }

// greet();        // Output: Hello, Morpheus!
// greet("Neo");  // Output: Hello, Neo!


// function sum(a, b) {
//     console.log(a + b);
// }

// sum(3, 5);  // Output: 8
// sum(10, 20); // Output: 30



// function multiply(x, y) {
//     console.log(x * y);
// }

// multiply(4, 5);  // Output: 20
// multiply(2, 10); // Output: 20



// // function add(a, b) {
// //     return a + b;
// // }

// // let result = add(3, 7);
// // console.log(result); // Output: 10

// function add(a, b) {
//     console.log(a + b);
// }

// let result = add(3, 7);
// console.log(result); // Output: 10 (from console.log) but `undefined`


// function getUserInfo() {
//     return ["Morpheus", 2.5];
// }

// let user = getUserInfo();
// console.log(user[0]); // Output: Morpheus
// console.log(user[1]); // Output: 2.5



// function checkAge(age) {
//     if (age < 18) {
//         return "Get out kiddo!";
//     }
//     return "Welcome on board sir!";
// }
// console.log(checkAge(15)); // Output: Get out kiddo!
// console.log(checkAge(21)); // Output: Welcome on board sir!


// function square(num) {
//     return num * num;
// }

// console.log(square(4));  // Output: 16
// console.log(square(5));  // Output: 25



// function changeText() {
//     document.getElementById("title").innerText = "New Title!";
// }


// document.getElementById("btn").addEventListener("click", function () {
//     alert("Button Clicked!");
// });
  


// let counter = 0;

// function incrementCounter() {
//   counter++;
// }

// incrementCounter();
// console.log(counter); // Outputs: 1


// function saveUserData(user) {
//     fetch("/save", {
//       method: "POST",
//       body: JSON.stringify(user),
//     });
// }

// function calculateDiscount(price, discountRate) {
//     return price - price * discountRate;
//   }
  
//   let finalPrice = calculateDiscount(100, 0.2);
//   console.log(finalPrice); // 80


//   async function getUserData(userId) {
//     let response = await fetch(`https://api.example.com/users/${userId}`);
//     return response.json(); // Returns data to use later
//   }
  
//   getUserData(1).then(user => console.log(user)); // Can use the fetched data



// let globalVar = "I am global";

// function testScope() {
//     let functionVar = "I am inside a function";
//     console.log(globalVar); // Accessible
//     console.log(functionVar); // Accessible
// }

// console.log(globalVar); // Accessible
// console.log(functionVar); // Error: functionVar is not defined


let name = "Morpheus"; // Global scope

function sayHello() {
    let name = "Neo"; // This shadows the global variable inside the function
    console.log("Hello, " + name); // Prints "Hello, Neo"
}


sayHello();
console.log("Hello, " + name); // Prints "Hello, Morpheus"


// var x = 10;
// if (true) {
//     var x = 20;
//     console.log(x); // 20 (overwrites global x)
// }
// console.log(x); // 20 (no block scope with var)

// let y = 10;
// if (true) {
//     let y = 20;
//     console.log(y); // 20 (local to the block)
// }
// console.log(y); // 10 (global y is unchanged)


// var coffee = "Espresso";

// function makeCoffee() {
//     var coffee = "Latte"; // Shadows global variable inside this function
//     console.log("Inside function:", coffee);    // Latte
// }

// makeCoffee();
// console.log("Outside function:", coffee); // Espresso


// let tea = "Green Tea";

// function makeTea() {
//     let tea = "Black Tea"; // Shadows the global 'tea' variable
//     console.log("Inside function:", tea);// Black Tea
// }

// makeTea();
// console.log("Outside function:", tea); // Green Tea



// let message = "Hello";

// function outer() {
//     let message = "Hi"; // Shadows global message

//     function inner() {
//         let message = "Hey"; // Shadows outer function message
//         console.log("Inner:", message); // Hey   
//     }

//     inner();
//     console.log("Outer:", message); // Hi
// }

// outer();
// console.log("Global:", message); // Hello





// function outerFunction() {
//     let count = 0; // Variable stored in closure

//     function innerFunction() {
//         count++; // Still has access to count
//         console.log(count);
//     }

//     return innerFunction; // Return inner function
// }

// const counter = outerFunction(); // Call outerFunction once

// counter(); // Output: 1
// counter(); // Output: 2
// counter(); // Output: 3


// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Morpheus", sayBye);  // Output: Hello, Morpheus, Goodbye!

// console.log("Start");

// setTimeout(function() {
//     console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");


// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//         console.log("Step 2");
//         setTimeout(() => {
//             console.log("Step 3");
//         }, 1000);
//     }, 1000);
// }, 1000);



// // Expressions

// const greet = function() {
//     console.log("Hello, world!");
// };

// greet(); // Output: Hello, world!


// sayHello(); // ReferenceError: Cannot access 'sayHello' before initialization

// const sayHello = function() {
//     console.log("Hi there!");
// };

// sayHello(); // Works fine!

// function sayHello() {
//     console.log("Hello, world!");
// }


// const greet = function() {
//     console.log("Hello!");
// };

// greet(); // ✅ Works fine!


// function sayHello() {
//     console.log("Hello, world!");
// }
