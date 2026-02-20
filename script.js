const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greeting = document.getElementById("greeting");
const attendeeCountSpan = document.getElementById("attendeeCount");
const maxCapacitySpan = document.getElementById("maxCapacity");
const progressBar = document.getElementById("progressBar");
const waterCount = document.getElementById("waterCount");
const zeroCount = document.getElementById("zeroCount");
const powerCount = document.getElementById("powerCount");

const maxCapacity = 50;
let attendeeCount = 0;
let water = 0;
let zero = 0;
let power = 0;

function updateUI(name, team) {
  attendeeCountSpan.textContent = attendeeCount;
  maxCapacitySpan.textContent = maxCapacity;
  const percentFilled = (attendeeCount / maxCapacity) * 100;
  progressBar.style.width = `${percentFilled}%`;
  if (name && team) {
    let teamName = "";
    if (team === "water") {
      teamName = "Team Water Wise";
    } else if (team === "zero") {
      teamName = "Team Net Zero";
    } else if (team === "power") {
      teamName = "Team Renewables";
    }
    greeting.textContent = `Welcome to Intel Summit, ${name} from ${teamName}!`;
  }
  waterCount.textContent = water;
  zeroCount.textContent = zero;
  powerCount.textContent = power;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const team = teamSelect.value;
  if (attendeeCount < maxCapacity && name !== "" && team !== "") {
    attendeeCount += 1;
    if (team === "water") {
      water += 1;
    } else if (team === "zero") {
      zero += 1;
    } else if (team === "power") {
      power += 1;
    }
    updateUI(name, team);
    form.reset();
  } else if (attendeeCount >= maxCapacity) {
    greeting.textContent = "Sorry, the event is at full capacity.";
  }
});

updateUI();
