// Chapter 2

// Looping a triangle

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing `.length` after it.


var abc = "abc";
console.log(abc.length);
// → 3


//do

var result = "#";
do {
	console.log(result);
	result +="#";
} while (result.length < 8);


//while loop

var hashes = "#";
while (hashes.length < 8) {
	console.log(hashes);
	hashes += "#";
}

//for loop

var string = "#";
for (var i = 0; i < 7; i++) {
	console.log(string);
	string += "#";
}

// FizzBuzz

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// Version 1

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}

//Version 2

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
	  console.log("FizzBuzz");	
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else {
		console.log(i);
	}
}

// Chess board

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

var string = "";
for (var i = 0; i < 8; i++) {
	if (i % 2 === 0) {
		string += " # # # #\n"
	} else {
		string +=  "# # # # \n";
	}
}
console.log(string);

// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

grid = (size) => {
	var result = "";
	for (var width = 0; width < size; width++) {
		for (var height = 0; height < size; height++) {
          if (width % 2 === 0 && height % 2 === 0) {
          	result += " ";
          } else if (width % 2 === 0 && height % 2 !== 0) {
          	result += "#";
          } else if (height % 2 === 0) {
          	result += "#";
          } else {
          	result += " ";
          }
		}
		result += "\n"
	}
	return result;
}

console.log(grid(8));


// Chapter 3: Functions

// Minimum

// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.


// Your code here.

var min = function(){
	if (arguments[0] > arguments[1]) {
		return arguments[1];
	} else {
		return arguments[0];
	}
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


//Recursion

// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

//  Zero is even.

//  One is odd.

//  For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

var isEven = function(n){
	if (n < 0) {
		n = -n;
	}
	if (n === 1) {
		return false;
	} else if (n === 0) {
		return true;
	}
	return isEven(n-2);
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false



// Bean counting

// You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

var countBs = function(str){
	// return length prop of map of str of only B's
	return [].filter.call(str, function(item){
		if (item === 'B') {
			return item;
		}
	}).length;
}

console.log(countBs('helloBB'));

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

var countChar = function(str, char){
	return [].filter.call(str, function(item){
		if (item === char) {
			return item;
		}
	}).length; 
};

console.log(countChar("there is a cat over there", "t"));

// Chapter 4: Objects and Arrays

//1. Sum of a range

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

//iterative

range = (st,end) => {
  var result = [];
  for (var i = st; i <= end; i++) {
  	result.push(i);
  }
  return result;
}

//recursive

rangeRecurse = (st,end) => {
	if (st === end) {
		return [st];
	} else {
		return [st].concat(rangeRecurse(st + 1, end));
	}
};

console.log(range(2,10));
console.log(rangeRecurse(2,10));


//sum

//iterative:

sum = (st,end) => {
  var total = 0;
  for (var i = st; i <= end; i++) {
  	total += i;
  }
  return total;
}

console.log(sum(1,10));

//recurse

sumRecurse = (st,end) => {
	if (st === end) {
		return end;
	} else {
		return st + sumRecurse(st+1, end);
	}
};

console.log("recursive sum: ", sumRecurse(1,10));


//sum with step value

rangeStep = (start,end,step) => {
	var result = [];
	if (step) {
	  for (var i = start; i <= end; i += step) {
		  result.push(i);
	  }
    } else {
    	for (var i = start; i <= end; i++) {
    		result.push(i);
    	}
    }

	return result;
};


console.log(rangeStep(1,10));

rangeStepRecurse = (start, end, step) => {
	if (start === end || start + step > end) {
	  return [start];
	} else if (step) {
		return [start].concat(rangeStepRecurse(start + step, end, step));
	} else {
		return [start].concat(rangeStepRecurse(start+ 1, end));
	}
}

console.log("workin?", rangeStepRecurse(1,10));
console.log("workin?", rangeStepRecurse(1,10,2));

//Reversing an array

//reverseArray (create new array)

reverseArray = (array) => {
	var reversed = [];
	for (var i = 0; i < array.length; i++) {
		reversed.unshift(array[i]);
	}
	return reversed;
}

console.log("Does this say [5,4,3,2,1]?", reverseArray([1,2,3,4,5]));

//reverseArrayRecursive

reverseArrayRecursive = (array) => {
  if (array.length === 1) {
  	return [array[0]];
  } else {
  	var current = [];
  	current.push(array.pop());
  	return current.concat(reverseArrayRecursive(array));
  }	
};

console.log("should also be [5,4,3,2,1]", reverseArrayRecursive([1,2,3,4,5]));


//reverseArrayInPlace (mutate old array)
//iterative

reverseArrayInPlace = (array) => {
	for (var i = 0; i < array.length/2; i++) {
		var beg = array[i];
		var end = array[array.length - 1 - i];
		array[i] = end;
		array[array.length -1 -i] = beg;
	}
	return array;
};

console.log("should be [1,2,3,4]", reverseArrayInPlace([4,3,2,1]));



//A list

var list = {
  value: 1,
  rest : {
    value: 2,
	rest: {
		value: 3,
		rest: null         
    }
  }
};

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list.

// console.log(list);

arrayToList = (array) => {
  var list = {};
  for (var i = array.length - 1; i >= 0; i--) {
  	if (i === array.length - 1) {
  	  list = {value: array[i], rest: null};
  	}
  	else {
  	  list = {value: array[i], rest: list};
  	}  
  }
  return list;
};

listToArray = (list) => {
	var result = [];
	for (var node = list; node; node = node.rest) {
		result.push(node.value)
	}
	return result;
};

console.log(arrayToList([1,2,3])); // below
console.log(listToArray(list)); // below

var list = {
  value: 1,
  rest : {
    value: 2,
	rest: {
		value: 3,
		rest: null         
    }
  }
};

var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};

//in order to build up this structure from an arrya, we can start by building up from the back. This means we iterate over the array backwards and build up the temrinal node first. The terminal node is {value: array[array.length -1], rest: null}. We then build up our object with that as the base:

arrayToList2 = array => {
	var list = {};
	for (var i = array.length - 1; i >=0; i--) {
		if (i === array.length - 1) {
			//most nested part of list
		  list = {value:array[i], rest: null}
		} else {
			//bulding up list
			console.log(list);
           list = {value: array[i], rest: list}
		}  
	}
	return list;
}

console.log("should be list", arrayToList2([1,2,3]));


deepEqual = (obj1,obj2) => {
  if (obj1 === null && obj2 === null) {
  	return true;
  } else if (typeof obj1 !== "object" && typeof obj2 !== "object") {
  	return obj1 === obj2;
  } else {
  	var obj1Properties = Object.keys(obj1);
  	var obj2Properties = Object.keys(obj2);
  	  if (obj1Properties.length !== obj1Properties.length) {
        return false;
  	  } else {
  	  	for (var key in obj1) {
  	  	  return deepEqual(obj1[key], obj2[key]);
  	  	} 
  	  }
  }
  return true; 
};

console.log(deepEqual(9,8));


var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
