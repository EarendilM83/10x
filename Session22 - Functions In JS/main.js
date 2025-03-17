function CoffeeMachine(){
    console.log("Coffee Machine is starting");
}

function makeTea(){
    console.log("Making Tea");
}

function makeSandwich(){
    console.log("Making Sandwich");
}


function CoffeeMachine() {
    console.log("Coffee Machine is starting...");
}

// Calling the function
CoffeeMachine();


function greet() {
    console.log("Hello!");
}

console.log("Before function call");
greet();
console.log("After function call"); 

function sayHello(){
    console.log("Hello, World!");
}

sayHello();


function orderPizza(topping) {
    console.log("You ordered a pizza with " + topping);
}

orderPizza("pepperoni"); // Output: You ordered a pizza with pepperoni
orderPizza("mushrooms"); // Output: You ordered a pizza with mushrooms


function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Morpheus"); // Output: Hello, Morpheus!
greet("Neo"); // Output: Hello, Neo!


function greet(name = "Morpheus") {
    console.log("Hello, " + name + "!");
}

greet();        // Output: Hello, Morpheus!
greet("Neo");  // Output: Hello, Neo!


function sum(a, b) {
    console.log(a + b);
}

sum(3, 5);  // Output: 8
sum(10, 20); // Output: 30



function multiply(x, y) {
    console.log(x * y);
}

multiply(4, 5);  // Output: 20
multiply(2, 10); // Output: 20