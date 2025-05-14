// // Assume this button exists in your HTML: <button id="deploy-drones">Deploy Drones</button>
// const deployDronesButton = document.getElementById("deploy-drones");

// // List of drone identifiers
// const drones = ["Drone Alpha", "Drone Bravo", "Drone Charlie", "Drone Delta"];

// deployDronesButton.addEventListener("click", () => {
//   // Loop through each drone and log its deployment
//   drones.forEach((drone, i) => {
//     console.log(`Preparing ${drone} (${i + 1}/${drones.length}) to patrol the airspace`);
//   });
//   console.log("✅ All drones are deployed and awaiting pilot setup.");
// });



// Assume this button exists in your HTML: <button id="deploy-drones">Deploy Drones</button>
// const deployDronesButton = document.getElementById("deploy-drones");

// // List of drone identifiers
// const drones = ["Drone Alpha", "Drone Bravo", "Drone Charlie", "Drone Delta"];

// deployDronesButton.addEventListener("click", () => {
//   // Loop through each drone and log its deployment
//   drones.forEach((drone, i) => {

//     setTimeout (() => {
//       // Simulate a delay for each drone deployment
     
//       console.log(`Deploying ${drone}...`);
//         // Log the message to the DOM as well
//         logMessage(`Deploying ${drone}...`);
//     }, i * 1000); // Delay each deployment by 1 second
    
//   });
//     // Log a message indicating all drones have been deployed
//     setTimeout(() => {
//       console.log("All drones have been deployed! Waiting for actions...");
//         // Log the message to the DOM as well
//         logMessage("All drones have been deployed! Waiting for actions...");
//     }, drones.length * 1000); // This will run after all drones have been deployed
// });

// // //show messages in dom as well
// const messageContainer = document.getElementById("messages");
// const logMessage = (message) => {
//   const messageElement = document.createElement("div");
//   messageElement.textContent = message;
//   messageContainer.appendChild(messageElement);
// };

// const field = document.querySelector("input");
// field.addEventListener("input", (e) => {
//   console.log("Current value:", e.target.value);
// });


// // Add listener
// element.addEventListener("eventType", handlerFunction);

// // Remove listener
// element.removeEventListener("eventType", handlerFunction);


// const btn = document.getElementById("action");

// // First listener
// btn.addEventListener("click", () => {
//   console.log("Listener A: logging action");
// });

// // Second listener
// btn.addEventListener("click", () => {
//   console.log("Listener B: sending analytics");
// });

// // Third listener for a different event
// btn.addEventListener("mouseover", () => {
//   console.log("Listener C: hover state on");
// });

// element.addEventListener("click", handler);
// element.addEventListener("input", handler);
// element.addEventListener("submit", handler);


// // 1) click event
// const btn = document.getElementById("deploy");
// btn.addEventListener("click", () => {
//   console.log("Deploy button clicked");
// });

// // 2) input event
// const field = document.getElementById("config-input");
// field.addEventListener("input", (e) => {
//   console.log("Config value:", e.target.value);
// });

// // 3) submit event
// const form = document.getElementById("mission-form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // prevent page reload
//   console.log("Form submitted:", e.target.elements);
// });

// // 4) keydown
// document.addEventListener("keydown", (e) => {
//     console.log(`Key down: ${e.key}`);
//   });
  
//   // 5) keyup
//   document.addEventListener("keyup", (e) => {
//     console.log(`Key up: ${e.key}`);
//   });
  
//   // 6) mouseover
//   const box = document.getElementById("hover-box");
//   box.addEventListener("mouseover", () => {
//     console.log("Mouse entered the box");
//   });
  
//   // 7) mouseout
//   box.addEventListener("mouseout", () => {
//     console.log("Mouse left the box");
//   });
  
//   // 8) change
//   const select = document.getElementById("mode-select");
//   select.addEventListener("change", (e) => {
//     console.log("Mode changed to:", e.target.value);
//   });


// element.addEventListener("eventType", function(event) {
//     // use event.property
// });


// const outer = document.getElementById("outer");

// outer.addEventListener("click", (e) => {
//   console.log("target:", e.target.id);         // 🟡 The actual clicked element
//   console.log("currentTarget:", e.currentTarget.id); // 🔵 The element that owns the listener
// });


// document.addEventListener("keydown", (e) => {
//     if (e.key === "1") {
//       console.log("Escape key pressed");
//       console.log("Enter key pressed");
//     }
//   });
  

// document.addEventListener("keydown", (e) => {
//     console.log("e.key:", e.key);   // What character or key was pressed
//     console.log("e.code:", e.code); // Physical key on the keyboard
  
//     if (e.key === "Enter") {
//       console.log("You pressed ENTER ✅");
//     }
  
//     if (e.code === "KeyA") {
//       console.log("You pressed the physical 'A' key ✅");
//     }
// });
  

const grid = document.getElementById("grid");
const probe = document.getElementById("probe");

// Capturing handler on grid
grid.addEventListener("click", () => {
  console.log("Grid handler (capturing)");
}, false);

// Bubbling handler on grid
grid.addEventListener("click", () => {
  console.log("Grid handler (bubbling)");
}, true);

// Handler on probe button
probe.addEventListener("click", () => {
  console.log("Probe handler");
}, false);


// const panel = document.getElementById("panel");
// const secureBtn = document.getElementById("secure-btn");

// // Parent listener
// panel.addEventListener("click", () => {
//   console.log("Panel clicked");
// });

// // Child listener with stopPropagation
// secureBtn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Secure action triggered");
// });
