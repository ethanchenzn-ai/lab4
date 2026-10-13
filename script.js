// current mood and number of choices
let mood = "";
let choices = 0;

// advice based on the mood
function check(choice) {
  mood = choice;
  choices++;

  if (mood === "tired") {
    document.getElementById("status").textContent = "Rest First";
    document.getElementById("result").textContent =
      "Take a 10-minute break. Then try one small study task or If you are really tired , consider taking a longer break.";
    document.getElementById("advice").style.backgroundColor = "#fff0d9";

  } else if (mood === "okay") {
    document.getElementById("status").textContent = "Start Small";
    document.getElementById("result").textContent =
      "Review your notes for 30 minutes, then do the practice question.";
    document.getElementById("advice").style.backgroundColor = "#e1efff";

  } else if (mood === "deadline") {
    document.getElementById("status").textContent = "Study Now!!!!!!!";
    document.getElementById("result").textContent =
      "An exam or assignment is coming up. Start immediately no matter you wanna study or not!: get it done and you dont wanna fail the course!!!!！.";
    document.getElementById("advice").style.backgroundColor = "#ffe0e0";

  } else if (mood === "ready") {
    document.getElementById("status").textContent = "Time to Focus";
    document.getElementById("result").textContent =
      "Choose a challenging topic and study for 45 minutes. Then take a short break and come back to studying.";
    document.getElementById("advice").style.backgroundColor = "#e3f5e5";
  }

  document.getElementById("count").textContent =
    "Choices made: " + choices;
}

// Return 
function reset() {
  mood = "";
  choices = 0;

  document.getElementById("status").textContent = "Choose your mood";
  document.getElementById("result").textContent =
    "Click a button to get a study suggestion.";
  document.getElementById("advice").style.backgroundColor = "#f0f4f8";
  document.getElementById("count").textContent = "Choices made: 0";
}