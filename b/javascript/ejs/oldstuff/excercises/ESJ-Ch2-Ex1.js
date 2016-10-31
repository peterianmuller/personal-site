//1. Write a loop that makes seven calls to console.log to output the following to the console:
//#
//##
//###
//####
//#####
//######
//#######
//var result = "";
//for(var i = 0; i <7; i++) {
  //result += "#";
  //console.log(result);
//}

//2. FizzBuzz: Write a program that uses console.log to print all the numbers from 1 to 100, with two exeptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that workign modify your program so that the program prints "FizzBuzz" for numbers that are divisible by both 3 and 5.

//2A: FizzBuzz with outputs of "Fizz" for (i % 3 === 0) and "Buzz" for ( i % 5 === 0).
//for (var i = 0; i < 100; i++) {
//  if (i % 3 === 0)
//    console.log("Fizz");
//  else if (i % 5 === 0)
//    console.log("Buzz");
//  else
//    console.log(i);
//}

//2B: FizzBuzz with "FizzBuzz" for (i % 3 === 0 && i % 5 === 0)
//for (var i = 0; i < 100; i++) {
//  if (i % 3 === 0 && i % 5 === 0)
//     console.log("FizzBuzz");
//  else if (i % 3 === 0)
//     console.log("Fizz");
//  else if (i % 5 === 0)
//     console.log("Buzz");
//  else
//     console.log(i);
//}

//3. Write a program that creates a string that represents an 8X8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chess board.
//Passing the string to console.log shoudl show the following:
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//var result = "";
//for (var i = 1; i < 9; i++) {
//  if (i % 2 === 0) {
//    result += "# # # # \n";
//  }
//  else {
//    result += " # # # # \n";
//  }
//}


//3B. When you have a program that generates this pattern, define a variable size, outputting a grid of the given width and height.

//Here we need to print a gameboard of height and length
// according to our size variable. below we are hard coding that the length is 8

//Below y is each line in its enterty and x is the column.

//we can do 0/2 but not 0/0 (x/0 returns NaN)
//we have to go through each coumn before increasing
// our x variable, correct?

//var result = "";
//for (var y = 0; y < size; y++) {
//  for (var x = 0; x <size; x++) {
//    if ((x+y) % 2 === 0)
//      result +=" "
//    else
//      result += "#"
//    }
//  result += '\n'
//}
//
//write a program that specifically has 5 rows.
//var size = 8;
//var result = "";
//for (var y = 0; y < 5; y++) {
//  for (var x = 0; x <size; x++) {
//    if ((x+y) % 2 === 0)
//      result +=" "
//    else
//      result += "#"
//    }
//  result += '\n'
//}
