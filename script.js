document.addEventListener("DOMContentLoaded", function () {
  // Store the number of questions and initialize variables
  const questions = document.querySelectorAll(".q-n-a").length;
  let totalScore = 0;
  let currentQuestionIndex = 0;
  const quizArea = document.getElementById("quiz-area");
  const finishButton = document.querySelector(".finish");
  const response = document.querySelector(".response p");
  const imageBox = document.querySelector(".imagebox img");

  // Hide all questions except the first one
  const quizSections = document.querySelectorAll(".q-n-a");
  function showQuestion(index) {
    quizSections.forEach((section, idx) => {
      section.style.display = idx === index ? "block" : "none";
    });
  }
  showQuestion(currentQuestionIndex);

  // Handle answer selection and score updating
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.addEventListener("click", function () {
      const parent = this.closest(".answers");

      // Remove previously selected answer's value from totalScore
      const selectedAnswer = parent.querySelector(".selected");
      if (selectedAnswer) {
        totalScore -= parseInt(selectedAnswer.dataset.value);
        selectedAnswer.classList.remove("selected");
      }

      // Add the current answer's value to totalScore
      this.classList.add("selected");
      totalScore += parseInt(this.dataset.value);
    });
  });

  // Move to the next question
  document.querySelectorAll(".next").forEach((nextButton) => {
    nextButton.addEventListener("click", function () {
      if (currentQuestionIndex < questions - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      }
    });
  });

  // Move to the previous question
  document.querySelectorAll(".previous").forEach((prevButton) => {
    prevButton.addEventListener("click", function () {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
      }
    });
  });

  // Show final result based on the average score
  finishButton.addEventListener("click", function () {
    const avgScore = totalScore / questions;
    let faction = "";
    let imgSrc = "";

    if (document.querySelectorAll(".selected").length === questions) {
      if (avgScore < 1.5) {
        faction = "Utilitarian (blue)";
        imgSrc = "img/utilitarian_flag.png";
      } else if (avgScore < 2.5) {
        faction = "Pacifist (yellow)";
        imgSrc = "img/pacifist_flag.png";
      } else if (avgScore < 3.5) {
        faction = "Group-Oriented (green)";
        imgSrc = "img/group_flag.png";
      } else {
        faction = "Selfish (red)";
        imgSrc = "img/selfish_flag.png";
      }

      // Display the final result
      response.textContent = `You belong to the ${faction} faction.`;
      imageBox.setAttribute("src", imgSrc);

      // Hide quiz-area and show the final result
      quizArea.style.display = "none";
      finishButton.style.display = "none";
      document.querySelector(".image").style.display = "block";
    } else {
      response.textContent = "You missed at least one question!";
    }
  });
});
