// stores the number of questions
var questions = document.querySelector(".questions").length;
//    stores the sum of the answers user selected
var total = 0;
//   stores the avg of the selected answers
var average = 0;

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
