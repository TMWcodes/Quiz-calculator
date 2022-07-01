# Quiz-calculator

Player answers multiple questions and receives a 'type' back.

**Game loop**

1. User selects answers
1. User can change answers by selection a different answer
1. Answers get averaged and user gets their result.
1. User sees result of finish screen.
<!-- 1. Randomize questions and answers with shuffle function -->

## Methodology

Formatted with prettier
right click format with prettier or settings: format on save + default formatter (prettier).

**HTML**

Inside of the quiz area division is a qna section. within the section is a question heading and a division of four answers each with a data value which can be used to increment score in JS.

## Discussion

**Choice: Vanilla v Jquery**

**Decided: Jquery**

Jquery

<!-- Jquery CDN -->

var $elem =$(".someClass")
'$elem.remove();
$elem.prepend($otherElem);
//same with .before .replaceWith .closest

Vanilla

var elem = document.querySelector(".someClass")
elem.remove()
'$elem.prepend(otherElem);
//same with .before .replaceWith .closest

References:
CSS-Tricks. (2017). (Now More Than Ever) You Might Not Need jQuery. [online] Available at: https://css-tricks.com/now-ever-might-not-need-jquery/ [Accessed 1 Jul. 2022].
