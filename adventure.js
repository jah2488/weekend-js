

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
allTheAnswers.push('Want to play? ' + continueResponse);


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
allTheAnswers.push('Name? ' + name);

var drugsLol = prompt('Hey ' + name + ' want to try some drugs?', 'yes, please');

if (drugsLol === 'yes' , 'yes, please'  , 'yup' , 'yeah' , 'yessir') {
  alert('I have em all');
} else {
  alert('You were never here, this never happened');
}
allTheAnswers.push('Drugs? ' + drugsLol);

var chooseOne = prompt(" I have caffiene, nicotine, or pcp", "pcp");
allTheAnswers.push('Drug of choice? '+ chooseOne);

if (chooseOne === "caffiene") {
    alert("Drink up!");
    p('Welcome to the life of a coffee addict. You will now spend 10% of your earnings on overpriced coffeeshops.')
    usingHelpers();
} else if (chooseOne === 'nicotine'){
    alert("Light Up");
    usingHelpers();
} else {
    alert("woah, you're crazy!");
    usingHelpers();
}

info('This game is based on a true story');
info('It was a dark and stormy night... when the loops began.');

p('The key is this', 'font-size: 10px;');
p('Present some options and then ask the question');

var answer = ask('Easy, right?', 'yes');
allTheAnswers.push(answer);

p('Then store the answer. For instance, you just told me ' + 'answer');
p('Using .push() add the answer to your array for keeping track of answers');



function usingHelpers() {
  console.log("Now I'm going to start using my console.log 'helper method'");

  var doesMakeSense = ask('Does that make sense?', 'Yep');
  allTheAnswers.push(doesMakeSense);

}

allTheAnswers.forEach(function(answer) {
  console.log(answer);
  });
