// stores the number of questions
        var questions = document.querySelector(".questions").length; 
//    stores the sum of the answers user selected
        var total = 0; 
//   stores the avg of the selected answers 
        var average = 0; 
        
        $('.answer').on('click', function(){
          $(this).addClass('selected');
          total += $(this).data('value');
        
          console.log(total);
        })