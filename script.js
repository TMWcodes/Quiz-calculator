// stores the number of questions
let questions = $(".question").length;
//    stores the sum of the answers user selected
let total = 0;
//   stores the avg of the selected answers
let average = 0;
//current question
let currQ = 0;

let myQuestions = $("section.q-n.a");

let myImage = document.querySelector("img");
// $(".image").hide();
// Image changer
// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute("src");
//   if (mySrc === "img/achiever_flag.png") {
//     myImage.setAttribute("src", "img/harvester_flag.png");
//   } else {
//     myImage.setAttribute("src", "img/achiever_flag.png");
//   }
// };
//
myQuestions.each(function (index) {
  let myAnswers = $(this).find(".answer");
  $(this).find(".answers").html(myAnswers);
  $(this).attr("id", index + 1);
  console.log(index);
  if (index == 0) {
    //remove previous button from first question
    $(this).find(".previous").remove();
  }
});

function showQ() {
  $("section.q-n-a").hide();
}
//

$(".answer").on("click", function () {
  //traverse Dom, whatever was clicked go up to the parent and find class of selected, remove its value from total
  if ($(this).parent().find(".selected").length > 0) {
    total -= $(this).parent().find(".selected").data("value");
    $(this).parent().find(".selected").removeClass("selected");
  }

  $(this).addClass("selected");
  //from data-value
  total += $(this).data("value");

  console.log(total);
});

// Type calculation on finish
$(".finish").on("click", function () {
  avg = total / questions;
  let message = "";

  if ($(".selected").length === questions) {
    if (avg < 1.5) {
      message = "You're a Hunter";
      myImage.setAttribute("src", "img/hunter_flag.png");
    } else if (avg < 2.5) {
      message = "You're a Socializer";
      myImage.setAttribute("src", "img/harvester_flag.png");
    } else if (avg < 3.5) {
      message = "You're an Achiever";
      myImage.setAttribute("src", "img/achiever_flag.png");
    } else {
      message = "You're an Explorer";
      myImage.setAttribute("src", "img/explorer_flag.png");
    }
    // hide quiz-area ID
    $("#quiz-area, .finish").hide();
    // $(".image").show();
  } else {
    message = "you missed at least one question";
  }
  $(".response p").text(message);
  $(".image").show();
  // $(".response p").text(message);
  // $(".response").show();

  // alert(message);
});

module.exports = script;
