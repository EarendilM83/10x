// Get all the card-wrapper elements
const cardWrappers = document.querySelectorAll('.card-wrapper_cyberfirefly');

const child = document.getElementById("tab-child_cyberfirefly");
const women = document.getElementById("tab-women_cyberfirefly");
const men = document.getElementById("tab-men_cyberfirefly");

const childDis = document.querySelector("#child_cyberfirefly");
const womenDis = document.querySelector("#women_cyberfirefly");
const menDis = document.querySelector("#men_cyberfirefly");

// Function to handle hover event
function handleHover() {
    // Remove the "active" class from the currently active card
    const activeElements = document.querySelectorAll('.active_cyberfirefly');
    activeElements.forEach(el => el.classList.remove('active_cyberfirefly'));

    // Add the "active" class to the hovered card and its children
    this.querySelector('.virus-name_cyberfirefly').classList.add('active_cyberfirefly');
    this.querySelector('.top-content-wrapper_cyberfirefly').classList.add('active_cyberfirefly');
    this.querySelector('.virus-icon-borders_cyberfirefly').classList.add('active_cyberfirefly');
    this.querySelector('.virus-img_cyberfirefly').classList.add('active_cyberfirefly');
}

// Add hover event listener to each card-wrapper
cardWrappers.forEach(card => {
    card.addEventListener('mouseenter', handleHover);
});

const addChild = () => {
    childDis.style.display = "flex";
    womenDis.style.display = "none";
    menDis.style.display = "none";

    child.classList.add("tab-active_cyberfirefly");
    men.classList.remove("tab-active_cyberfirefly");
    women.classList.remove("tab-active_cyberfirefly");
};

const addWomen = () => {
    childDis.style.display = "none";
    womenDis.style.display = "flex";
    menDis.style.display = "none";

    women.classList.add("tab-active_cyberfirefly");
    men.classList.remove("tab-active_cyberfirefly");
    child.classList.remove("tab-active_cyberfirefly");
};

const addMen = () => {
    childDis.style.display = "none";
    womenDis.style.display = "none";
    menDis.style.display = "flex";

    men.classList.add("tab-active_cyberfirefly");
    child.classList.remove("tab-active_cyberfirefly");
    women.classList.remove("tab-active_cyberfirefly");
};

child.addEventListener("click", addChild);
women.addEventListener("click", addWomen);
men.addEventListener("click", addMen);


// Select the timeline wrapper
// const timelineWrapper = document.getElementById('timeline-wrapper_cyberfirefly');

// // Add an event listener for the 'wheel' event
// timelineWrapper.addEventListener('wheel', (event) => {
//     const atRightEdge = timelineWrapper.scrollLeft + timelineWrapper.clientWidth >= timelineWrapper.scrollWidth;
//     const atLeftEdge = timelineWrapper.scrollLeft <= 0;

//     // If not at an edge, scroll horizontally and prevent default vertical scrolling
//     if (!atRightEdge && !atLeftEdge) {
//         event.preventDefault(); // Prevent vertical scrolling
//         timelineWrapper.scrollLeft += event.deltaY; // Map vertical wheel movement to horizontal scroll
//     }
// }, { passive: false });



//  Select the timeline wrapper
const timelineWrapper = document.getElementById("timeline-wrapper_cyberfirefly");

// Add an event listener for the 'wheel' event
timelineWrapper.addEventListener("wheel", (event) => {
  // Calculate the maximum horizontal scroll position
  const maxScrollLeft = timelineWrapper.scrollWidth - timelineWrapper.clientWidth;

  // Determine if we're at the start or end of horizontal scrolling
  const atStart = timelineWrapper.scrollLeft === 0;
  const atEnd = timelineWrapper.scrollLeft === maxScrollLeft;

  if (!(atStart && event.deltaY < 0) && !(atEnd && event.deltaY > 0)) {
    // Allow horizontal scrolling within bounds
    event.preventDefault();
    timelineWrapper.scrollLeft += event.deltaY;
  }

  // Log the current scroll position for debugging
  console.log("Horizontal scroll position:", timelineWrapper.scrollLeft);
});