// console.log("Im sorry for being sarcastic");
// console.log("Im sorry for being sarcastic");
// console.log("Im sorry for being sarcastic");
// console.log("Im sorry for being sarcastic");
// console.log("Im sorry for being sarcastic");


// for (let i = 0; i < 5; i++) {
//     console.log("Im sorry for being sarcastic");
// }
// // dish 1
// console.log("Wet the dish")
// console.log("Apply soap")
// console.log("Scrub the dish"); 
// console.log("Rinse the dish")
// console.log("Dry the dish");
// console.log("Put the dish away")

// // dish 2
// console.log("Wet the dish")
// console.log("Apply soap")
// console.log("Scrub the dish"); 
// console.log("Rinse the dish")
// console.log("Dry the dish");
// console.log("Put the dish away")

// // dish 3
// console.log("Wet the dish")
// console.log("Apply soap")
// console.log("Scrub the dish"); 
// console.log("Rinse the dish")
// console.log("Dry the dish");
// console.log("Put the dish away")

// // dish 4
// console.log("Wet the dish")
// console.log("Apply soap")
// console.log("Scrub the dish"); 
// console.log("Rinse the dish")
// console.log("Dry the dish");
// console.log("Put the dish away")

// for (let i = 0; i < 4; i++) {   
//     console.log("Wet the dish")
//     console.log("Apply soap")
//     console.log("Scrub the dish"); 
//     console.log("Rinse the dish")
//     console.log("Dry the dish");
//     console.log("Put the dish away")
// }

// const robot = {
//     name: "Sentinel",
//     model: "XJ-9",
//     level: 5
// };

// for (let prop in robot) {
//     console.log(prop + ": " + robot[prop]);
// }

// const nums = [10, 20, 30];
// for (let i in nums) {
//   console.log(i);          // index: 0, 1, 2
//   console.log(nums[i]);    // value: 10, 20, 30
// }



// const person = { 
//     name: "Nukri",
//     age: 38,
//     kids: ["Nukri", "Nukri Jr.", "Nukri III"],
//     carBrand: ["Porsche", "Wrangler", "Tesla"],
//     model: ["GT3-RS", "Rubicon", "Model S"],
//     color: "yellow",
//     year: 2035,
//     woodhouse: "yes",
//     humorLevel: "Daddy joke stage",
//     StudentsSuccessLevel: "Super high",
//     happyness: "Super happy",
// };
   
    

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

const weapons = ["sword", "shield", "laser"];

for (let i = 0; i < weapons.length; i++) {
    console.log(weapons[i]);
  }
// Output: sword, shield, laser  


for (let item of weapons) {
    console.log(item);
  }
// Output: sword, shield, laser


const spells = ["Fireball", "Teleport", "Heal"];

for (let spell of spells) {
  console.log("Casting: " + spell);
}
// Output: Casting: Fireball, Casting: Teleport, Casting: Heal


const name = "Morpheus";

for (let letter of name) {
  console.log(letter);
}
// Output: M, o, r, p, h, e, u, s


const parts = ["Vision Module", "Speech Core", "Energy Cell"];
for (let part of parts) {
  console.log("Assembling: " + part);
}
// Output: Assembling: Vision Module, Assembling: Speech Core, Assembling: Energy Cell

// while (condition) {
//     // code to run while condition is true
// }
  

// let energy = 3;

// while (energy > 0) {
//   console.log("Running... energy left: " + energy);
//   energy--;
// }
// Output: Running... energy left: 3, Running... energy left: 2, Running... energy left: 1

// Use a while loop to count down like this:

// Self-destruct in: 5
// Self-destruct in: 4
// Self-destruct in: 3
// Self-destruct in: 2
// Self-destruct in: 1
// Boom! 💥
// let countdown = 5;
// while (countdown > 0) {
//     console.log("Self-destruct in: " + countdown);
//     countdown--;
// }
// console.log("Boom! 💥") ;
// Output: Self-destruct in: 5, Self-destruct in: 4, Self-destruct in: 3, Self-destruct in: 2, Self-destruct in: 1, Boom! 💥


let correctPassword = "MegatronIsCutiepiePrincess123@";
let input = "";
let attempts = 0;

while (input !== correctPassword && attempts < 3) {
  input = prompt("Enter your password:");
  attempts++;

  if (input !== correctPassword) {
    alert("Wrong password! Attempts left: " + (3 - attempts));
  }
}

if (input === correctPassword) {
  alert("✅ Access granted.");
} else {
  alert("❌ Too many failed attempts. You are locked out. Sentinel will be notified.");
}
