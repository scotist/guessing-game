var prompt = ['Am I intelligent?']
var acknowledgement = ['You answered ']
var right = ['That is Correct, ']
var wrong = ['Wrong! As a matter of fact, ']
var error = ['You didn\'t enter either yes or no!']

for (i = 0; i < prompt.length; i++){

  var q1 = prompt(prompt[0]).toLowerCase();
  alert(acknowledgement[0] + q1 + '...');

  if (q1 === 'yes' || q1 === 'y') {
    alert(right[0] + name + '!');
    console.log("To the first question the user correctly answered " + q1);
    corQuest += 1;
  } else if (q1 === 'no' || q1 === 'n') {
    alert(wrong[0] + name + ' I do have a mind!');
    console.log("To the first question the user incorrectly answered " + q1);
  } else {
    alert(error[0]);
    console.log('The user gave an invalid response: ' + q1);
  }
}
