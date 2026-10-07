// Save the current mood
let mood = "";

// Show advice based on the mood
function check(choice) {
  mood = choice;

  if (mood === "tired") {
    document.getElementById("result").textContent = "Take a break.";
  } else if (mood === "okay") {
    document.getElementById("result").textContent = "Review your notes.";
  } else {
    document.getElementById("result").textContent = "Start studying!";
  }
}