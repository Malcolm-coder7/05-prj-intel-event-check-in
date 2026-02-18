// Get DOM elements
const attendeeCountSpan = document.getElementById("attendeeCount");
const maxCapacitySpan = document.getElementById("maxCapacity");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");

// Variables
const maxCapacity = 50;
let attendeeCount = 0;

// Update UI
function updateUI(name) {
  attendeeCountSpan.textContent = attendeeCount;
  const percentFilled = (attendeeCount / maxCapacity) * 100;
  progressBar.style.width = `${percentFilled}%`;
  if (name) {
    greeting.textContent = `Welcome to Intel Summit, ${name}!`;
  }
}

// Handle form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (attendeeCount < maxCapacity && name !== "") {
    attendeeCount += 1;
    updateUI(name);
    form.reset();
  } else if (attendeeCount >= maxCapacity) {
    greeting.textContent = "Sorry, the event is at full capacity.";
  }
});

// Initialize UI
updateUI();
