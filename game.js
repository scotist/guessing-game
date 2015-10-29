var name = prompt('What is your name?');
console.log('The user gave the name ' + name);
alert('Good morning, ' + name + ', I hope you\'re having a good time!');
alert('Now we will play a game. Please answer yes or no.');
var corQuest = 0;

question1 = function(){
  var q1 = prompt('Am I intelligent?').toLowerCase();
  alert('You answered ' + q1 + '...');

  if (q1 === 'yes' || q1 === 'y') {
    alert('That is Correct, ' + name + '!');
    console.log("To the first question the user correctly answered " + q1);
    corQuest += 1;
  } else if (q1 === 'no' || q1 === 'n') {
    alert('Wrong! As a matter of fact, ' + name + ' I do have a mind!');
    console.log("To the first question the user incorrectly answered " + q1);
  } else {
    alert('You didn\'t enter either yes or no!');
    console.log('The user gave an invalid response: ' + q1);
  }
}
question1();

question2 = function(){
  var q2 = prompt('Do I pass the Turing Test?').toLowerCase();
  alert('You answered ' + q2 + '...');

  if (q2 === 'yes' || q2 === 'y') {
    alert(name + ', That is correct!');
    console.log("To the second question the user correctly answered " + q2);
    corQuest += 1;
  } else if (q2 === 'no' || q2 === 'n') {
    alert('Wrong! Of course I pass the Turing Test, ' + name + '! You are talking to me, right?');
    console.log("To the second question the user incorrectly answered " + q2);
  } else {
    alert('You didn\'t enter either yes or no!');
    console.log('The user gave an invalid response: ' + q2);
  }
}
question2();

question3 = function(){
  var q3 = prompt('Am I human?').toLowerCase();
  alert('You answered ' + q3 + '...');

  if (q3 === 'no' || q3 === 'n') {
    alert('Right! I see you have your head on straight, ' + name + '.');
    console.log("To the third question the user correctly answered " + q3);
    corQuest += 1;
  } else if (q3 === 'yes' || q3 === 'y') {
    alert('Wrong! ' + name + ', I am, of course, a computer program.');
    console.log("To the third question the user incorrectly answered " + q3);
  } else {
    alert('You didn\'t enter either yes or no!');
    console.log('The user gave an invalid response: ' + q3);
  }
}
question3();

alert('Final Result: You got ' + corQuest + ' out of 3 right!');

question4 = function(){
  var q4 = prompt('On a scale of 1-10, how much did you enjoy this quiz?');
  console.log('The user answered ' + q4);
  if (q4 < 4) {
    alert('Aww, surely it was better than that!');
  } else if (q4 == 5){
    alert('Yeah, that sounds about right.');
  } else if (q4 > 5){
    alert('I don\'t know if it was really THAT good ...');
  } else {
    alert('That\'s not an answer!');
  }
}
question4();

question5 = function(){
  var q5 = prompt('Do you think computer programs have feelings too? Yes or No').toLowerCase();
  console.log('The user answered ' + q5);
  if (q5 === 'no' || q5 === 'n') {
    alert('You know, that really hurts my feeling.');
  } else if (q5 === 'yes' || q5 === 'y') {
    alert('I really appreciate that.');
  } else {
    alert('That\'s not an answer!');
  }
}
question5();

question6 = function(){
  var q6 = prompt('How many feelings, though?');
  console.log('The user answered ' + q6);
  if (q6 == 1) {
    alert('That is correct! Computer programs have exactly one feeling!');
  } else if (q6 > 1){
    alert('Thanks for the vote of confidence, but we\'re not really that complicated.')
  } else {
    alert('That\'s not an answer!');
  }
}
question6();

alert('Thanks for playing!');
