// let x = 2;
// switch(x) {
//   case 1: console.log("One"); break;
//   case 2: console.log("Two"); break;
//   default: console.log("Other");
// }



// let x = 0;
// if (x || x === 0) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }

// let a = "";
// if (a) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }


// let a = true, b = false;
// if (a && !b || b && !a) {
//   console.log("X");
// } else {
//   console.log("Y");
// }

// function greet(name) {
//   return "Hi " + name;
// }
// console.log(greet("Ana"));

// function outer() {
//   let count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }
// const c = outer();
// console.log(c(), c());

// const say = function() { console.log("Hello"); }
// say();

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// let i = 3;
// while (i > 0) {
//   console.log(i--);
// }

const a={
  x:1
}; 

const b=a;
b.x=2;

console.log(a.x);
