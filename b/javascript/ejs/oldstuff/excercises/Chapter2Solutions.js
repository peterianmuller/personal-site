//FizzBuzz

for (var i = 1; i <=100; i++) {
  if (i % 5 === 0 && i % 3 === 0 ) {
    console.log("FizzBuzz");
  }

  else if (i % 3 ===0) {
    console.log("Fizz");
  }

  else if (i % 5 === 0) {
    console.log("Buzz");
  }

  else {
    console.log(i);
  }

};

//ChessBoard

var results = "";
for (var i = 1; i < 10; i++) {
 //print out these lines
  var lineOdd = " # # # # \n";
  var lineEven = "# # # # \n";
  if (i % 2 === 0) {
    results += lineEven;
  }

  else {
    results += lineOdd;
  }
};

console.log(results);

//define var size = 8 and change the program so that it can
//use any size varable and produce a grid of given width
//and height

//original
var results = "";
for (var i = 1; i < 10; i++) {
 //print out these lines
  var lineOdd = " # # # # \n";
  var lineEven = "# # # # \n";
  if (i % 2 === 0) {
    results += lineEven;
  }

  else {
    results += lineOdd;
  }
};

//with var size

var size = 8;

var results = "";
for (var i = 1; i < size + 1; i++) {
 //print out these lines
  var lineOdd = " # # # # \n";
  var lineEven = "# # # # \n";
  if (i % 2 === 0) {
    results += lineEven;
  }

  else {
    results += lineOdd;
  }
};

//compare my solution with thier solution. Use of x and y axis
//
