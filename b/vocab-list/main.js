
/*
var addWord = function(word) {
  var newWord = "'<p>' + "
  document.querySelector('#js').appendChild();
}

addWord();



var theNumber = Number(prompt("write a number", ""));
if (!isNaN(theNumber))
 alert("Your number is the square root of "+ theNumber * theNumber);


var num = Number(prompt("Write a number", ""));
if (num < 10)
  alert("small number dude!");
else if (num < 100)
  alert("medium");
else
   alert("big, bro!");
*/

var number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}

var counter = 0;
var result = 1;
while (counter < 10) {
  result *= 2;
  counter += 1;
}
console.log(result);

/*
do {
  var name = prompt("Who are you?");
}
while (!name) {
  console.log(name);
};

for (var number = 0; number <=12; number += 2) {
  console.log("should print numbers 0 to 12", number);
}
*/

//write code that evaluates 2 to the 10th power with for loop
var result2= 1;
for (var i = 0; i < 10; i++) {
   result2 *= 2;
}
console.log("should be 1024", result2);

//write code that evaluates 2^ 9

var twoTotheNinth = function(){
 var result3 = 1;
 for (var i = 0; i < 9; i++){
   result3 *= 2;
 }
 return result3;
};

for (var current = 5; ; current++) {
  if (current % 7 == 0) {
  break; }
};
console.log("should be 7: \n", current)
