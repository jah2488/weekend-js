var questions = [
    'What is your age?',
    'What is your location?',
    'What is your favorite coffee?',
    'What is your favorite book?',
    ];


var x = 0;

while ( x < questions.length) {
  prompt( questions[x]);
  x++;
}

allAnswers.forEach(function(answer) {
  console.log(answer);
  });
