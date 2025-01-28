const timelineWrapper = document.getElementById("timeline-wrapper_cyberfirefly");
let timelineContent = document.querySelector(".timeline_cyberfirefly"); // Target only the content for the active tab
const leftArrow = document.getElementById("left-arrow_cyberfirefly");
const rightArrow = document.getElementById("right-arrow_cyberfirefly");
const cardWrappers = document.querySelectorAll(".card-wrapper_cyberfirefly");

// tabs
const child = document.getElementById("tab-child_cyberfirefly");
const women = document.getElementById("tab-women_cyberfirefly");
const men = document.getElementById("tab-men_cyberfirefly");

const childDis = document.querySelector("#child_cyberfirefly");
const womenDis = document.querySelector("#women_cyberfirefly");
const menDis = document.querySelector("#men_cyberfirefly");

// Initialize global variables
let currentTranslateX = 0;
let cardWidth = cardWrappers[0]?.offsetWidth + 
    (parseInt(window.getComputedStyle(timelineWrapper).gap) || 0);

// Helper to update active timeline content
const updateActiveTimeline = (newTimelineId) => {
    // Update the active timeline content
    timelineContent = document.querySelector(`#${newTimelineId}`);
    currentTranslateX = 0; // Reset the translate position
    timelineContent.style.transform = `translateX(${currentTranslateX}px)`; // Reset to the initial position
    timelineContent.style.transition = "transform 0.5s ease-out"; // Add smooth transition for UX
    console.log(`Active timeline switched to: ${newTimelineId}`);
};

// Tabs logic
const addChild = () => {
    childDis.style.display = "flex";
    womenDis.style.display = "none";
    menDis.style.display = "none";

    child.classList.add("tab-active_cyberfirefly");
    women.classList.remove("tab-active_cyberfirefly");
    men.classList.remove("tab-active_cyberfirefly");

    updateActiveTimeline("child_cyberfirefly");
};

const addWomen = () => {
    childDis.style.display = "none";
    womenDis.style.display = "flex";
    menDis.style.display = "none";

    women.classList.add("tab-active_cyberfirefly");
    child.classList.remove("tab-active_cyberfirefly");
    men.classList.remove("tab-active_cyberfirefly");

    updateActiveTimeline("women_cyberfirefly");
};

const addMen = () => {
    childDis.style.display = "none";
    womenDis.style.display = "none";
    menDis.style.display = "flex";

    men.classList.add("tab-active_cyberfirefly");
    child.classList.remove("tab-active_cyberfirefly");
    women.classList.remove("tab-active_cyberfirefly");

    updateActiveTimeline("men_cyberfirefly");
};

child.addEventListener("click", addChild);
women.addEventListener("click", addWomen);
men.addEventListener("click", addMen);

// Drag-and-swipe functionality
let isDragging = false;
let startX = 0;
let prevTranslateX = 0;

// Cursor changes for better UX
timelineWrapper.style.cursor = "grab";

// Start dragging
timelineWrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX; // Capture starting mouse position
    prevTranslateX = currentTranslateX; // Record the current translateX
    timelineWrapper.style.cursor = "grabbing"; // Change cursor to grabbing
    timelineContent.style.transition = "none"; // Disable transition during drag

    // Prevent text selection
    document.body.classList.add("no-select");
});

// Dragging in progress
timelineWrapper.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX; // Calculate mouse movement
    currentTranslateX = prevTranslateX + deltaX; // Update translateX
    timelineContent.style.transform = `translateX(${currentTranslateX}px)`; // Apply translate
});

// Stop dragging
timelineWrapper.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    timelineWrapper.style.cursor = "grab"; // Reset cursor
    timelineContent.style.transition = "transform 0.5s ease-out"; // Smoothly settle
    enforceBoundaries(); // Prevent overscroll

    // Re-enable text selection
    document.body.classList.remove("no-select");
});

timelineWrapper.addEventListener("mouseleave", () => {
    if (!isDragging) return;
    isDragging = false;
    timelineWrapper.style.cursor = "grab";
    timelineContent.style.transition = "transform 0.5s ease-out";
    enforceBoundaries();

    // Re-enable text selection
    document.body.classList.remove("no-select");
});

// Arrow functionality
const scrollStep = cardWidth * 2; // Scroll step (e.g., 2 cards)

// Left arrow
leftArrow.addEventListener("click", () => {
    if (currentTranslateX < 0) {
        currentTranslateX += scrollStep;
        if (currentTranslateX > 0) currentTranslateX = 0; // Prevent overscroll on the left
        timelineContent.style.transition = "transform 0.5s ease-in-out";
        timelineContent.style.transform = `translateX(${currentTranslateX}px)`;
    }
});

// Right arrow
rightArrow.addEventListener("click", () => {
    const maxTranslateX = -(timelineContent.scrollWidth - timelineWrapper.clientWidth);
    if (currentTranslateX > maxTranslateX) {
        currentTranslateX -= scrollStep;
        if (currentTranslateX < maxTranslateX) currentTranslateX = maxTranslateX; // Prevent overscroll on the right
        timelineContent.style.transition = "transform 0.5s ease-in-out";
        timelineContent.style.transform = `translateX(${currentTranslateX}px)`;
    }
});

// Prevent dragging outside of boundaries
function enforceBoundaries() {
    const maxTranslateX = -(timelineContent.scrollWidth - timelineWrapper.clientWidth);
    if (currentTranslateX > 0) {
        currentTranslateX = 0; // Snap back to the left edge
    } else if (currentTranslateX < maxTranslateX) {
        currentTranslateX = maxTranslateX; // Snap back to the right edge
    }
    timelineContent.style.transform = `translateX(${currentTranslateX}px)`;
}

// Recalculate card width on resize
window.addEventListener("resize", () => {
    cardWidth = cardWrappers[0]?.offsetWidth + 
        (parseInt(window.getComputedStyle(timelineWrapper).gap) || 0);
    console.log("Updated Card Width on Resize:", cardWidth);
    enforceBoundaries(); // Adjust position after resize
});
