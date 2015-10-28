var name = prompt('What is your name?');
console.log('The user gave the name ' + name);
alert('Good morning, ' + name + ', I hope you\'re having a good time!');
alert('Now we will play a game. Please answer yes or no.');
var corQuest = 0

var Q1 = prompt('Am I intelligent?').toLowerCase();
alert('You answered ' + Q1 + '...');

if (Q1 === 'yes' || Q1 === 'y') {
  alert('That is Correct, ' + name + '!');
  console.log("To the first question the user correctly answered " + Q1);
  corQuest += 1;
} else if (Q1 === 'no' || Q1 === 'n') {
  alert('Wrong! As a matter of fact, ' + name + ' I do have a mind!');
  console.log("To the first question the user incorrectly answered " + Q1);
} else {
  alert('You didn\'t enter either yes or no!');
  console.log('The user gave an invalid response: ' + Q1);
}

var Q2 = prompt('Do I pass the Turing Test?').toLowerCase();
alert('You answered ' + Q2 + '...');

if (Q2 === 'yes' || Q2 === 'y') {
  alert(name + ', That is correct!');
  console.log("To the second question the user correctly answered " + Q2);
  corQuest += 1;
} else if (Q2 === 'no' || Q2 === 'n') {
  alert('Wrong! Of course I pass the Turing Test, ' + name + '! You are talking to me, right?');
  console.log("To the second question the user incorrectly answered " + Q2);
} else {
  alert('You didn\'t enter either yes or no!');
  console.log('The user gave an invalid response: ' + Q2);
}

var Q3 = prompt('Am I human?').toLowerCase();
alert('You answered ' + Q3 + '...');

if (Q3 === 'no' || Q3 === 'n') {
  alert('Right! I see you have your head on straight, ' + name + '.');
  console.log("To the third question the user correctly answered " + Q3);
  corQuest += 1;
} else if (Q3 === 'yes' || Q3 === 'y') {
  alert('Wrong! ' + name + ', I am, of course, a computer program.');
  console.log("To the third question the user incorrectly answered " + Q3);
} else {
  alert('You didn\'t enter either yes or no!');
  console.log('The user gave an invalid response: ' + Q3);
}

alert('Final Result: You got ' + corQuest + ' out of 3 right!');

var Q4 = prompt('On a scale of 1-10, how much did you enjoy this quiz?');
console.log('The user answered ' + Q4);
if (Q4 < 4) {
  alert('Aww, surely it was better than that!');
} else if (Q4 == 5){
  alert('Yeah, that sounds about right.');
} else {
  alert('I don\'t know if it was really THAT good ...');
}
