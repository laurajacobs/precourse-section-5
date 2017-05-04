

var correctAnswers = 0;

function setScore(score){
  $('#score').html(score);
}

function markAnswered(answerElement){
  answerElement.parents('.question').addClass('answered');
}

function hasBeenAnswered(answerElement){
  return answerElement.parents('.question').hasClass('answered')
}

$(document).ready(function(){

  $('h1').focus();
  //initilizes my score as zero
  setScore(correctAnswers);

  //if correct answer score + 1 and green background
  $('.correct').click(function(){
    if(hasBeenAnswered($(this)) === true){
      return;
    };
    $(this).addClass('correctAnswer');
    correctAnswers += 1
    setScore(correctAnswers);
    markAnswered($(this));
  })

  $('.incorrect').click(function(){
    if(hasBeenAnswered($(this)) === true){
      return;
    };
    $(this).addClass('incorrectAnswer');
    markAnswered($(this));
  });

  $('#reset').click(function(){
    location.reload();
  });





})


