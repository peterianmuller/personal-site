## Variables: Value Vs Refernce
# how do variables treat primitives vs complex objects

variable on L side = box itself
variable on r hand side = resolved value

primitives get stored in the box (variable) as itself (7, "string", true).

# Complex objects and variables:

var favNums = [3,7,42];
- First create space in memory to store this thing to memory. We store collection of numbers to space in memory.
- What gets saved to variable name is memory address.
- favNums saves ox2cdf (memory address). We can't get access to this memory address. The memory access has been abstracted away AKA we don't have do deal w/ it as programmers.

memory address, pointer gets saved to favNums.

 - First JS resolves array to a value. "Abstracting some stuff from you" = Hiding stuff

Comparing complex objects with === will result in a false b/c we're comparing spaces in memory.

```Javascript

var a = [2,9]; //resolve value to the R of variable. Since it's a complex object, the value that gets resolved is a space in memory. ox2cdf

var b = [2,9]; // resolved value to R of variable. value is a space at memory.

a === b; // false because we're comparing spaces at memory
// ox2cdf === ox3bd4


var b = a; // Resolve a's value. b is set to the value of a, which is the memory location of a.

a === b; // true (both point to the same memory access)


```

```Javascript

var a =[2,9];
var b = a;
b[2] = 10; //NOT A VARIABLE RESASSIGNMENT
a === b; //true!! Because the values of each are the spaces in memory.
console.log(b[2]); // 10

//Both a and b are notes that point to the same space in memory (b/c a and b are complex objects)

```

```Javascript
var a =[2,9];  //space in memory a ox2cdf
var b = a;     // space in memory b ox2cdf
a = 7;       // a is no set to a primitive
b == 7; // false



var a =[2,9];  //space in memory a ox2cdf
var b = a;     // space in memory b ox2cdf
a = [2,9];       // New space in memory ox3cdg
b === a; // false

var a = [2,9];
var b = a; // b is set to the value of a, which is the space in memory that contains this array
b = undefined;
a; // still space in memory that contains array [2,9]




var a = [2, [10,12], 42]; //space in memory that points to an array. The second element of this array is another reference at space of memory.   
var b = a[1]; // b is equal to a space at memory. ox2cdf (inside of this value is another array). b doesn't care who else contains this space in memory.
b[0] = 5;
a; // value of a is still space at memory but the contents of the space at memory have changed.



var a = [2, [10,12], 42]; //space in memory that points to an array. The second element of this array is another reference at space of memory.   
var b = a[1];
a = undefined;
console.log(b); // [10,12]; a's value is undefined but doesn't change value b.


var a = [2, [10,12], 42];
a = undefined;
var b = a[1];
a; // error




```
- Don't trip about hoisting

```Javascript
var array = [11,42,55]; //resolves value to a space at memory. That space in memory contains an array. ox2cdf
function doStuff(arr) {
  var arr = array; //ox2cdf
  arr[1] = 10; //second element of oxcdf changes to 10.
  arr = undefined; // arr is undefined
};
doStuff(array); //execute function
console.log(array); // [11,10,55] Because local variable has changed the second element of the contents of .

//above is same as:

var arr = array;
arr[1] = 10;

```







 sidebar, we start at index 0 so that its easier to reference space at memory number 1
