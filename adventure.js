

function p (text, css) {
  console.log("%c" + text, "font-size: 14px; " + css);
}

function info (text) {
  console.log("%c---" + text + "---", "color: gray; font-size: 15px;");
}

var allAnswers = [];

function ask (question, defaultAnswer) {
  return prompt(question, defaultAnswer);
}


var wantPlay = ask('Would you like to play a game?', 'yes');

var yesPlay = function (){
  var chooseName = prompt('Choose a username');
  allAnswers.push('Name? ' + chooseName);
  alert('Hello! ' + chooseName);
  alert('The point of this game is math, because there\'s nothing like a good math game.');
  alert('There\'s only one question. Bummmer right?');
  alert('right');
  var question1 = prompt('What is 5 + 5?');
  if (question1 === '10') {
    allAnswers.push('Answer ' + question1);
    alert('Correct, you\'re a genius.');
  } else {
    allAnswers.push('Answer ' + question1);
    alert('You\'re wrong, and no one loves you');
  }
}

var noPlay = function (){
  alert('But first, this short survey about your experience at this webpage');
  prompt('Question 1 of 1000 \n Did you love popups?');
}

var confusedPlayer = function (){
  alert('Go home, you\'re drunk');
}

if ( wantPlay === "yes") {
  allAnswers.push('Want to play? ' + wantPlay);
  alert('woowahweewah');
  yesPlay();
} else if ( wantPlay === "no"){
  allAnswers.push('Want to play? ' + wantPlay);
  alert('Aiight bye felecia');
  noPlay();
} else {
  confusedPlayer();
}

allAnswers.forEach(function(answer) { console.log(answer); });
