// Stores the number of questions
const questions = document.querySelectorAll(".question").length;
// Stores the sum of the answers user selected
let total = 0;
// Stores the average of the selected answers
let average = 0;
// Current question index
let currQ = 0;

// Select all question sections
const myQuestions = Array.from(document.querySelectorAll("section.q-n-a"));
// Select the image element
const myImage = document.querySelector("img");

// Remove 'previous' button from the first question
myQuestions.forEach((question, index) => {
  const myAnswers = question.querySelectorAll(".answer");

  question.querySelector(".answers").innerHTML = Array.from(myAnswers)
    .map((answer) => answer.outerHTML)
    .join("");
  question.id = index + 1;

  if (index === 0) {
    const previousButton = question.querySelector(".previous");
    if (previousButton) previousButton.remove(); // Safely remove the previous button
  }
});

// Shuffle the questions array
shuffle(myQuestions);

// Append shuffled questions to the quiz area
const quizArea = document.getElementById("quiz-area");
quizArea.innerHTML = "";
myQuestions.forEach((q) => quizArea.appendChild(q));

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to hide all questions
function hideQuestions() {
  myQuestions.forEach((q) => (q.style.display = "none"));
}

// Event listener for selecting answers
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("answer")) {
    const parent = event.target.closest(".answers");

    // Remove previous selected class and update total
    const previousSelected = parent.querySelector(".selected");
    if (previousSelected) {
      total -= previousSelected.dataset.value;
      previousSelected.classList.remove("selected");
    }

    // Add selected class and update total
    event.target.classList.add("selected");
    total += parseInt(event.target.dataset.value);

    console.log(`Current total: ${total}`);
  }
});

// Event listener for finish button
document.querySelector(".finish").addEventListener("click", () => {
  const selectedAnswers = document.querySelectorAll(".selected").length;

  if (selectedAnswers === questions) {
    const avg = total / questions;
    let message = "";

    if (avg < 1.5) {
      message = "You're a Hunter";
      myImage.src = "img/hunter_flag.png";
    } else if (avg < 2.5) {
      message = "You're a Socializer";
      myImage.src = "img/harvester_flag.png";
    } else if (avg < 3.5) {
      message = "You're an Achiever";
      myImage.src = "img/achiever_flag.png";
    } else {
      message = "You're an Explorer";
      myImage.src = "img/explorer_flag.png";
    }

    // Hide quiz and finish button
    document.getElementById("quiz-area").style.display = "none";
    document.querySelector(".finish").style.display = "none";

    // Display result message and image
    document.querySelector(".response p").textContent = message;
    document.querySelector(".image").style.display = "block";
  } else {
    // Message when not all questions are answered
    document.querySelector(".response p").textContent =
      "You missed at least one question.";
  }
});

// Export the script (optional if using a bundler like Webpack)
export default script;
