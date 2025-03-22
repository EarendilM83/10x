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
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // ❌ Unexpected output!
    }, 1000);
}

// solution with let
for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // ✅ Expected output
    }, 1000);
}

for (var i = 1; i <= 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // ✅ Correct output!
        }, 1000);
    })(i); // Passing i to an IIFE
}
