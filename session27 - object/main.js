// let user = new Object(); // "object constructor" syntax
// let user2 = new Object(); // "object constructor" syntax
// let user3 = new Object(); // "object constructor" syntax
// let user1 = {};  // "object literal" syntax

// const bladeRunner = {
//     name: "K",
//     model: "Nexus-9",
//     occupation: "Blade Runner",
//     age: 3,
//     serialNumber: "KD6-3.7",
//     isReplicant: true,
//     memoryImplants: true,
//     emotionalResponseTest: function() {
//       return "Stable.";
//     },
//     partner: {
//       name: "Joi",
//       type: "AI Companion",
//       manufacturer: "Wallace Corporation"
//     },
//     equipment: ["blaster", "badge", "tracker"],
//     missionStatus: "active"
// };
  

// const character = {
//     name: 'Rick Sanchez',
//     age: 70,
//     occupation: 'Scientist',
// }

// console.log(character.name); // Output: Rick Sanchez
// console.log(character["name"]);  // Output: Rick Sanchez
// console.log(character["age"]);  // Output: 70

// character.age = 71; // Update age
// console.log(character.age); // Output: 71

// character.equipment = ['portal gun', 'laser gun']; // Add equipment property 
// console.log(character.equipment); // Output: ['portal gun', 'laser gun']   



// common mistakes
// console.log(character.weapon); // Output: undefined (property doesn't exist)
// console.log(character["weapon"]); // Output: undefined (property doesn't exist)
// character["weapon"] = Laser; // Error: Laser is not defined -> reference error
// character level = 5; // Syntax error

// character["level"] = 5 // Correct way to add a property
// character.level = 5; // Correct way to add a property


//deleting properties
// delete character.age; // Delete the age property
// console.log(character.age); // Output: undefined (property doesn't exist)

// delete character; 
// console.log(character); // Output: ReferenceError: character is not defined



// let superpowers = ['flight', 'super strength', 'heat vision'];

// const hero = {
//     name: 'Superman',
//     age: 35,
//     alterEgo: {
//         name: 'Clark Kent',
//         occupation: 'Journalist'
//     },
//     isAlien: true,
//     homePlanet: 'Krypton'
// }

// hero.superPowers = superpowers; // Add superpowers property
// console.log(hero.superPowers); // Output: ['flight', 'super strength', 'heat vision']

// const vacuumBot = {
//     name: "Sucker",
//     model: "27001",
//     color: "white",
   
//     move: function(x,y) {
//       console.log("Moving around...");
//     },
//     remoteControl: function() {
//       console.log("Controlled remotely.");
//     },
//     suckDust: () => {
//       console.log("Sucking the dust...");
//     },
//     mopeFloor: function mope() {
//       console.log("Moping the floor...");
//     }
//   };
  
//   // Example of calling methods:
//   vacuumBot.move(10, 20); // Moving around...
//   vacuumBot.remoteControl(); // Controlled remotely.
//   vacuumBot.suckDust(); // Sucking the dust...
//   vacuumBot.mopeFloor(); // Moping the floor...
  

  //built-in methods

// Object.keys(vacuumBot); // ["name", "model", "color", "move", "remoteControl", "suckDust", "mopeFloor"]

// Object.values(vacuumBot); // ["Sucker", "27001", "white", ƒ, ƒ, ƒ, ƒ]

// Object.entries(vacuumBot); // [["name", "Sucker"], ["model", "27001"], ["color", "white"], ["move", ƒ], ["remoteControl", ƒ], ["suckDust", ƒ], ["mopeFloor", ƒ]]


// Object.hasOwnProperty(vacuumBot, "name"); // true
// Object.hasOwnProperty(vacuumBot, "battery"); // false


// const extraFeatures = { voiceControl: true };
// Object.assign(vacuumBot, extraFeatures);


// console.log(vacuumBot);




//this keyword
// The value of 'this' is determined by how a function is called, not where it's defined.
// In the context of an object method, 'this' refers to the object itself.
// In the context of a regular function, 'this' refers to the global object (or undefined in strict mode).
// In the context of an event handler, 'this' refers to the element that triggered the event.
// In the context of a constructor function, 'this' refers to the newly created object instance.
// In the context of an arrow function, 'this' is lexically bound to the surrounding context.
// In the context of a class method, 'this' refers to the instance of the class.
// In the context of a DOM event, 'this' refers to the element that triggered the event.
// In the context of a setTimeout or setInterval callback, 'this' refers to the global object (or undefined in strict mode).
// In the context of a Promise executor function, 'this' refers to the global object (or undefined in strict mode).
// In the context of a module, 'this' refers to the module itself (or undefined in strict mode).
// In the context of a generator function, 'this' refers to the generator object itself.
// In the context of a class static method, 'this' refers to the class itself.


// const robot = {
//     name: "RoboCop",
//     model: "RX-78",
//     year: 2025,
//     greet: function() {
//         console.log(`Hello, I am ${this.name}, a ${this.model} model.`);
//     },
//     move: function(x, y) {
//         console.log(`Moving to coordinates (${x}, ${y})`);
//     },
//     batteryLevel: 100,
//     chargeBattery: function(amount) {
//         this.batteryLevel += amount;
//         console.log(`Battery charged to ${this.batteryLevel}%`);
//     }
// };

// // common mistakes
// // 1. Using 'this' in a regular function context
// const bot = {
//     name: "Neo",
//     speak: () => {
//       console.log("Hi, I am " + this.name); // ❌ undefined
//     }
//   };
//   bot.speak();


// // 2. Using 'this' in a nested function
// const car = {
//     brand: "Tesla",
//     model: "Model S",
//     start: function() {
//       console.log("Starting the car...");
//       setTimeout(function() {
//         console.log("Car started!" + this.brand); // ❌ undefined
//       }, 1000);
//     }
//   };
//   car.start(); // Output: "Starting the car..." followed by "Car started! undefined"


//   const robot = {
//     name: "Sentinel",
//     speak: function() {
//         console.log("Hi, I'm Sentinel");
//     }
      
//   }

//   const robot = {
//     name: "Sentinel",
//     speak: function() {
//       console.log("Hi, I'm " + this.name);
//     }
//   };
  
  const robot = {
    name: "Sentinel",
    speak: function() {
      console.log("Hi, I am " + robot.name);
    }
  };
  
  const bot = robot;
  bot.name = "Optimus Prime";
  bot.speak(); // Still says: Hi, I am Sentinel ❌
  

  // const robot = {
  //   name: "Sentinel",
  //   speak: function() {
  //     console.log("Hi, I am " + this.name);
  //   }
  // };
  
  // const bot = robot;
  // bot.name = "Optimus Prime";
  // bot.speak(); // ✅ Hi, I am Optimus Prime
  