// stores the number of questions
var questions = $(".question").length;
console.log(questions);
//    stores the sum of the answers user selected
var total = 0;
//   stores the avg of the selected answers
var average = 0;
var myQuestions = $("section.q-n.a");

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

$(".finish").on("click", function () {
  avg = total / questions;
  var message = "";

  if ($(".selected").length === questions) {
    if (avg < 1.5) {
      message = "you are 1 type";
    } else if (avg < 2.5) {
      message = "you are 1 type";
    } else if (avg < 3.5) {
      message = "you are 3 type";
    } else {
      message = "you are a 4 type";
    }
    $("#quiz-area, .finish").hide();
  } else {
    message = "you missed at least one question";
  }
  $(".response p").text(message);
  $(".response").show();

  // alert(message);
});
