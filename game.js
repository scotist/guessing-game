var name = prompt('What is your name?');
console.log('The user gave the name ' + name);
var greeting = document.getElementById('greeting');
greeting.innerHTML = 'Good morning, ' + name + ', I hope you\'re having a good time!<br /><br />Now we will play a game. Please answer yes or no.';
var corQuest = 0;

question1 = function(){
  var q1 = prompt('Am I intelligent?').toLowerCase();
  var guess1 = document.getElementById('guess1');
  guess1.innerHTML = 'You answered ' + q1 + '...';
  var answer = document.getElementById('answer1');

  if (q1 === 'yes' || q1 === 'y') {
    answer1.className = 'correct';
    answer.innerHTML = 'That is Correct, ' + name + '!' + '<br><img width="200" src="image/angryrobot.jpg">';
    console.log("To the first question the user correctly answered " + q1);
    corQuest += 1;
  } else if (q1 === 'no' || q1 === 'n') {
    answer1.className = 'incorrect';
    answer.innerHTML = 'Wrong! As a matter of fact, ' + name + ' I do have a mind!';
    console.log("To the first question the user incorrectly answered " + q1);
  } else {
    answer.innerHTML = 'You didn\'t enter either yes or no!';
    console.log('The user gave an invalid response: ' + q1);
    question1();
  }
}
question1();

question2 = function(){
  var q2 = prompt('Do I pass the Turing Test?').toLowerCase();
  var guess2 = document.getElementById('guess2');
  guess2.innerHTML = 'You answered ' + q2 + '...';
  var answer = document.getElementById('answer2');

  if (q2 === 'yes' || q2 === 'y') {
     answer2.className = 'correct';
    answer.innerHTML = name + ', That is correct!' + '<br><img width="200" src="image/hallrobot.jpg">';
    console.log("To the second question the user correctly answered " + q2);
    corQuest += 1;
  } else if (q2 === 'no' || q2 === 'n') {
    answer2.className = 'incorrect';
    answer.innerHTML = 'Wrong! Of course I pass the Turing Test, ' + name + '! You are talking to me, right?';
    console.log("To the second question the user incorrectly answered " + q2);
  } else {
    answer.innerHTML = 'You didn\'t enter either yes or no!';
    console.log('The user gave an invalid response: ' + q2);
    question2();
  }
}
question2();

question3 = function(){
  var q3 = prompt('Am I human?').toLowerCase();
  var guess3 = document.getElementById('guess3');
  guess3.innerHTML = 'You answered ' + q3 + '...';
  var answer = document.getElementById('answer3');
  if (q3 === 'no' || q3 === 'n') {
    answer3.className = 'correct';
    answer.innerHTML = 'Right! I see you have your head on straight, ' + name + '.' + '<br><img width="200" src="image/humanrobot.jpg">';
    console.log("To the third question the user correctly answered " + q3);
    corQuest += 1;
  } else if (q3 === 'yes' || q3 === 'y') {
    answer3.className = 'incorrect';
    answer.innerHTML = 'Wrong! ' + name + ', I am, of course, a computer program.';
    console.log("To the third question the user incorrectly answered " + q3);
  } else {
    answer.innerHTML = 'You didn\'t enter either yes or no!';
    console.log('The user gave an invalid response: ' + q3);
    question3();
  }
}
question3();

var result = document.getElementById('result');

result.innerHTML = 'Final Result: You got ' + corQuest + ' out of 3 right!';

question4 = function(){
  var q4 = prompt('On a scale of 1-10, how much did you enjoy this quiz?');
  console.log('The user answered ' + q4);
  var answer = document.getElementById('answer4');
  if (q4 < 4) {
    answer4.className = 'incorrect';
    answer.innerHTML = 'Aww, surely it was better than that!';
  } else if (q4 == 5){
    answer4.className = 'correct';
    answer.innerHTML = 'Yeah, that sounds about right.' + '<br><img width="200" src="image/robotfeels.jpg">';
  } else if (q4 > 5){
    answer4.className = 'incorrect';
    answer.innerHTML = 'I don\'t know if it was really THAT good ...';
  } else {
    answer.innerHTML = 'That\'s not an answer!';
    question4();
  }
}
question4();

question5 = function(){
  var q5 = prompt('Do you think computer programs have feelings too? Yes or No').toLowerCase();
  console.log('The user answered ' + q5);
  var answer = document.getElementById('answer5');
  if (q5 === 'no' || q5 === 'n') {
    answer5.className = 'incorrect';
    answer.innerHTML = 'You know, that really hurts my feeling.';
  } else if (q5 === 'yes' || q5 === 'y') {
    answer5.className = 'correct';
    answer.innerHTML = 'I really appreciate that.' + '<br><img width="200" src="image/smartrobot.jpg">';
  } else {
    answer.innerHTML = 'That\'s not an answer!';
    question5();
  }
}
question5();

question6 = function(){
  var q6 = prompt('How many feelings, though?');
  console.log('The user answered ' + q6);
  var answer = document.getElementById('answer6');
  if (q6 == 1) {
    answer6.className = 'correct';
    answer.innerHTML = 'That is correct! Computer programs have exactly one feeling!' + '<br><img width="200" src="image/turingrobot.jpg">';
  } else if (q6 > 1){
    answer6.className = 'incorrect';
    answer.innerHTML = 'Thanks for the vote of confidence, but we\'re not really that complicated.';
  } else {
    answer.innerHTML = 'That\'s not an answer!';
    question6();
  }
}
question6();

var conclusion = document.getElementById('conclusion');
conclusion.innerHTML = 'Thanks for playing!';


