const bladeRunner = {
    name: "K",
    model: "Nexus-9",
    occupation: "Blade Runner",
    age: 3,
    serialNumber: "KD6-3.7",
    isReplicant: true,
    memoryImplants: true,
    emotionalResponseTest: function() {
      return "Stable.";
    },
    partner: {
      name: "Joi",
      type: "AI Companion",
      manufacturer: "Wallace Corporation"
    },
    equipment: ["blaster", "badge", "tracker"],
    missionStatus: "active"
};
  

const character = {
    name: 'Rick Sanchez',
    age: 70,
    occupation: 'Scientist',
}

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


// //deleting properties
// delete character.age; // Delete the age property
// console.log(character.age); // Output: undefined (property doesn't exist)

character.type = "Paladin"; // ✅ Not an error — adds new property



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