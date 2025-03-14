// let username = "Morpheus";
// console.log(username);  // ?

// username = "Neo";
// console.log(username);  // ?

// const country = "Georgia";
// console.log(country);

// country = "Germany"; // What happens here?


// console.error("შეცდომა: ცვლადის შეცვლა არ შეიძლება, რადგან ის კონსტანტაა");
// console.warn("გაფრთხილება: ცვლადის შეცვლა არ შეიძლება, რადგან ის კონსტანტაა");
// console.table({username, country});


// const user = { name: "Alice", age: 25 };
// user.age = 30; // ✅ Allowed
// console.log(user); // { name: "Alice", age: 30 }


// let n = 123;
// n = 12.345;


// alert( 1 / 0 ); // Infinity
// alert( Infinity ); // Infinity
// alert( "not a number" / 2 ); // NaN
// alert( "not a number" / 2 + 5 ); // NaN


// alert( NaN + 1 ); // NaN
// alert( 3 * NaN ); // NaN
// alert( "not a number" / 2 - 1 ); // NaN


// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992


// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;

// let age = 28
// // embed a variable
// alert( `Age is: , ${age}!` ); // Age is: 28!

// // embed an expression
// alert( `the result is ${1 + 2}` ); // the result is 3


// let nameFieldChecked = true; // yes, name field is checked
// let ageFieldChecked = false; // no, age field is not checked


// let isGreater = 4 > 1;

// alert( isGreater ); // true (the comparison result is "yes")


// let age = null;


// let age;

// alert(age); // shows "undefined"


// let user = {     // an object
//     name: "Nukri",  // by key "name" store value "Nukri"
//     age: 28        // by key "age" store value 28
// };


// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  (1)

// typeof null // "object"  (2)

// typeof alert // "function"  (3)




// let x = 10;
// let y = x; // Copy the value of x into y

// y = 20; // Change y
// console.log(x); // 10 (x is unchanged)
// console.log(y); // 20 (y is separate)


// let obj1 = { name: "Alice", age: 25 };
// let obj2 = obj1; // Copy the reference, not the value

// obj2.age = 30; // Modify obj2
// console.log(obj1.age); // 30 (obj1 is also changed!)

let obj1 = { name: "Morpheus", age: 2.5 };

// Correct way to copy (spread operator)
let obj2 = { ...obj1 };

obj2.age = 3; // Now only obj2 is affected
console.log(obj1.age); // 2.5 (unchanged)
console.log(obj2.age); // 3
