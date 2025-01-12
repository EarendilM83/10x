// Get all the card-wrapper elements
const cardWrappers = document.querySelectorAll('.card-wrapper');

const child = document.getElementById("tab-child");
const women = document.getElementById("tab-women");
const men = document.getElementById("tab-men");


const childDis = document.querySelector("#child");
const womenDis = document.querySelector("#women");
const menDis = document.querySelector("#men");

// Function to handle hover event
function handleHover() {
    // Remove the "active" class from the currently active card
    const activeElements = document.querySelectorAll('.active');
    activeElements.forEach(el => el.classList.remove('active'));

    // Add the "active" class to the hovered card and its children
    this.querySelector('.virus-name').classList.add('active');
    this.querySelector('.top-content-wrapper').classList.add('active');
    this.querySelector('.virus-icon-borders').classList.add('active');
    this.querySelector('.virus-img').classList.add('active');
}

// Add hover event listener to each card-wrapper
cardWrappers.forEach(card => {
    card.addEventListener('mouseenter', handleHover);
});


const addChild = ()  => {
    childDis.style.display = "flex";
    womenDis.style.display = "none";
    menDis.style.display = "none";

    child.classList.add("tab-active")
    men.classList.remove("tab-active")
    women.classList.remove("tab-active")

}

const addWomen = ()  => {
    childDis.style.display = "none";
    womenDis.style.display = "flex";
    menDis.style.display = "none";

    women.classList.add("tab-active")
    men.classList.remove("tab-active")
    child.classList.remove("tab-active")


}
const addMen = ()  => {
    childDis.style.display = "none";
    womenDis.style.display = "none";
    menDis.style.display = "flex";

    men.classList.add("tab-active")
    child.classList.remove("tab-active")
    women.classList.remove("tab-active")


}


child.addEventListener("click", addChild);
women.addEventListener("click", addWomen);
men.addEventListener("click", addMen);



// Select the timeline wrapper
const timelineWrapper = document.getElementById('timeline-wrapper');

// Add an event listener for the 'wheel' event
timelineWrapper.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent the default vertical scrolling behavior

    // Scroll horizontally by adjusting the scrollLeft property
    timelineWrapper.scrollLeft += event.deltaY; // Use deltaY for vertical wheel movement to control horizontal scrolling
    { passive: false } 
});

