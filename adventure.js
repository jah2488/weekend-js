

function p (text, css) {
  console.log("%c" + text, "font-size: 14px; " + css);
}

function info (text) {
  console.log("%c---" + text + "---", "color: gray; font-size: 15px;");
}

function ask (question, defaultAnswer) {
  return prompt(question, defaultAnswer);
}

var allTheAnswers = [];
console.log('How to build a text adventure with console.log() and prompt()');

var continueResponse = prompt('Do you want to play?', 'yes');
allTheAnswers.push('want to play?' + continueResponse);


switch ( continueResponse ) {
  case 'yes':
    alert('Hooray, we are playing');
      break;
  case 'no':
    alert('ok, cya!');
      break;
  case 'idk':
    alert('me either');
      break;
  default :
    alert('PICK NOW');
      break;
}

var name = prompt("First, choose a username");
alert('Nice to meet you, ' + name);
allTheAnswers.push(name);

var upOrDown = prompt("Do you want to go (UP)stairs or (DOWN)stairs?", "DOWN");
allTheAnswers.push(upOrDown);

if (upOrDown === "UP") {
    console.log("Going up!");
    usingHelpers();
} else {
    console.log("Going down!");
    usingHelpers();
}

info('This game is based on a true story');
info('It was a dark and stormy night... when the loops began.');

p('The key is this', 'font-size: 50px;');
p('Present some options and then ask the question');
var answer = ask('Easy, right?', 'yes');
allTheAnswers.push(answer);

p('Then store the answer. For instance, you just told me ' + 'answer');
p('Using .push() add the answer to your array for keeping track of answers');



function usingHelpers() {
  console.log("Now I'm going to start using my console.log 'helper method'");
  console.log("A helper method is a small method that wraps up a bit of functionality. Making it easier to use repeatedly or more readable.");

  var doesMakeSense = ask('Does that make sense?', 'Yep');
  allTheAnswers.push(doesMakeSense);

  switch (doesMakeSense ){
      case "Yep":
        p("Okay, I'm glad that makes sense.");
        break;
      case "No":
        p("No? Well, ask me about it more tomorrow.");
        break;
      default:
        p("I'm going to have to take that as a maybe...");
  }

}

allTheAnswers.forEach(function(answer) {
  console.log(answer);
  });
