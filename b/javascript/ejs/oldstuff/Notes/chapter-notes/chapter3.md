
# functions
some uses of functions:
- structure large programs
- reduce repetition
- associate names (lisp!) with subprograms
- isolate subprograms from each other.

Programming languages come with built-in methods, but these are strict and specific - looping, variable definitions, math operators etc. We need to define new vocabulary to avoid repeating ourselves.

## Defining a Function!


We use our ol' buddy variable declaration to define a function. we just happen to be using var to associate a name with a function.

```javascript
var square = function (x) {
  return x * x;
};

console.log(square(12));
//144
```
Functions are created by using the keyword function and have parameters that are inside of () and a body.
Functions can have many parameters or no parameters.
Let's take a look at two functions that show how it's perfectly acceptable to have 0 parameters:

```javascript
//below the function has no parameters, but still does something.
var makeNoise = function() {
  console.log('ping!');
};

makeNoise();
//ping!

//Below is a function with 2 parameters. Note that we don't have to put {} around the single line of the for loop because the return statement only refers to the function:

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
   //only for debugging: console.log(result);
  return result;
};

```  
Note that the power function has a return statement, but the makeNoise function doesn't. This is ok. A return statement is the value the the function returns. Also, the return statement means that the once the interpreter encounters a return statement, the code will jump out of the function. The return statement is the last thing the interpreter deals with in the function, kind of like a break statement in a loop.

# Parameters and Scopes

Parameters to a function are like regular variables, but they are given upon invocation of the function. The function declaration/definition does not give the values of the parameters, they are just placeholders at that point.

The variables created inside the body of a function, including the parameters to that function are local to that function. This means that the result variable in the power function above will be newly created each time the function is called and each invocation does not know about the other functions result variable.

The "localness" of the variables within a function body applies only to the parameters and variables declared within the function body. Variables declared outside of the function body are global, and the program has access to all global variables in the global scope. It is possible to access global variables within function bodies as long as there isn't a local variable declared with the same name as the global variable.

Let's take a look at two functions that show the difference between declaring variables locally and globally:

``` javascript
var x = "outside";

var f1 = function() {
   var x = "inside f1";
  console.log(x);
};

f1();
console.log(x);
// "outside"
//It;'' outside because that var keyword hoists the variable declaration of x to the top of its local scope, which is the function body. so the "f1 x" is "inside f1" but outside of the function scope, x is still what has been declared globally, "outside"

var f2 = function() {
  x = "inside f2";
  console.log(x);
};

f2();
console.log(x);

//f2 changes the global variable x once f2 is invoked because here we see the global variable x being overwritten within the function body of f2.

```
So when we overwrite a variable that is declared in the global scope without using the var keyword, it will overwrite the global instance of that variable. If we want our variables to be specific to that functions scope, we should use the var keyword. Variables declared with the var keyword get hoisted to the top of that scope.

The fact that function-specific scopes have variables that they can declare without other invocations of that function or other functions knowing about their local variables makes it possible for functions to be treated as little universes of code. Modules.

## Nested Scopes

We've seen that Javascript differentiates between local and global scope. However, while there is 1 global scope, there can be as many local scopes as there are nested functions. Each nested function creates a new scope.

Let's look at a function with two nested functions:

``` Javascript
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";      
  };
  var mountain = function(size) {
      result += "/";
    for ( var count = 0; count < size; count++)
      result += "'";
    result += "\\";    
  }    

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());


var landscape2 = function(){
  var result = "";
  var tree = function(size){
    for (var i = 0; i < size; i++)
      result += "^";    
  };
  var ground = function(size){
    for (var i = 0; i < size; i++)
    result += "_";
  }
  ground(4);
  tree(6);
  ground(3);
  return result;
}

```

OK SOOOOOO: The landscape function basically builds up a little landscape world within the body. There are two nested functions within landscape: flat and mountain. Since the only var keyword used is in the parent scope right under the landscape function declaration.  The flat and mountain functions can see (they have access to) the result variable because child scopes have access to thier parents scope. But! flat and mountain are siblings so they can't see each other's count variable.

Also the global enviornment doesn't have access to variables declared within the landscape scope.

Lexical scoping means that child functions have access to parent functions scope. Thus variables declared at the top of a function can be accessed by nested functions. For example we declared our result variable right inside the parent scope and then appended result within the children functions, flat and mountain for landscape and tree and ground for landscape2.

Some other programming languages have new scopes being created with nay block of code!! Ahhhh! In JS functions are the only place to create new scope.

note: In ecma 6, the let keyword will allow for codeblocks to have local scopes.

```Javascript
 something = 1;
console.log(something); //1
 {
    var something = 2;
   console.log(something); //2
 }
console.log(something); //2

 //as of now, this just has the variable being overwritten

```

# Functions as values
Functions are different from their names? A function value can do all things that other values can do: strings, numbers, Booleans, undefined values. We can store a function value in a new place (to a new variable), we can pass it as an argument to another function. A variable that holds a function can be overwritten to hold any other value (including another function). For example we can overwrite the variable which was originally set toa function value:

```Javascript
var launchMissils = function (value) {
  missileSystem.launch("now");
};

if (safeMode)
  launchMissils = function(value) {/*do nothing*/};

```
Above, we see that the function launchMissils was overwritten simply by declaring a variable safeMode and setting it to true so that the conditional expression (safeMode) // true.

## Declaration

We can declare functions differently than using the var keyword. When we use the var keyword for creating a function = function definition.

Below is a function declaration. the name after the function keyword saves the function to the word square.

```javascript
function square(x){
  return x * x;
}
```
Subtle difference between function definition and function declaration:

```javascript
console.log("the future says: " + future());
//the future says we still have no flying cars
console.log("the second future says: " + future2());
//the second future says: No free healthcare either jeeeez!

 function future() {
  return ("we still have no flying cars");
}
 function future2() {
   return("No free healthcare either jeeeez!")
 }

```

The console.log prints out a valid string because function declarations are taken out of the top-down flow of programs. They are hoisted to the top of their scope (in this case the global scope) and can be used by all code in that scope. This is also true for function definitions.

However, we can;t put function declarations inside of code blocks inside of conditional executions (if/else loop)

```Javascript
function example(){
  function a() {} //ok
  if (something) {
    function b(){} //danger
  }
}

```

But we can use function definitions inside conditional execution code blocks?

# The Call Stack!

Control flows through functions in a particular way. functions are ignored until they are called, and after they are called, control returns to the line of invocation and moves to the next line.

```Javascript
function greet(who) {
  console.log("hello" + who);
}
greet("Pete");
console.log("Bye")
```

Above, the call to greet happens at line 4 of the code. This cases the program to jump to line 2, which is the beginning of the body of the greet function. The body of greet (line 2) has a call to console.log, which does its job passing in the argument "Pete". This is the end of the code block of the body of the greet function. After that function, the code returns to the line of invocation (line 4). There is nothing to do so the program moves to the next line of code ,which is a call to console.log.

In order to perform this switching of location of the code, it has to remember where the function was called. Above, greet was first called on line 4. The place where the computer stores the locations of the function calls is the call stack. Whenever we are invoking a function, the current location of that function call is placed on the top of the call stack. If we are calling too many functions than the call stack gets filled up. Infinite recursion means the stack will be blown.

Example of an infinite loop via blowing the call stack:

```Javascript
function chicken(){
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first");
//infinite recursive loop!
//There's no mechanism to stop these functions from calling each other!
```

# Optional Arguments

We know that the alert function will take the first argument we pass into it and demonstrate that argument on the pop up box that is shown to the user. However, we can pass in  a bunch of extra arguments that the interpreter might not use.

```Javascript
alert("hello", "oh hay", "good morning");
//pop-up window with "hello"; Other args ignored.
```

Similarly, if we pass in fewer arguments than requested, the non-entered parameters get set to undefined.

Because JS allows us to pass too many/too few arguments to functions, we can write fail-safes within our function to set arguments that are not passed to be values.

```Javascript
//power function with exponent set to 2 if no exponent argument passed
function power(base,exponent) {
  if (exponent === undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
   result *= base;
  return result;
}

```
Above works because the exponent of something equals the base multiplied a bunch of times and the base can be whatever, not just two so we need to update the result with by multiplying the base by result for each time (the exponent).

In the next chapter we're bouta see how we can use the Arguments keyword to get an exact list of the arguments that were passed to the function!

# Closure!

Nested functions have access to parent scope variables even if those variables seemingly disappear!

Nested functions have access to parent scope variables. Functions are called and these parent variables are recreated. However, what happens when the function call is no longer active.

 ```Javascript
function wrapValue(n) {
  var localVariable = n;
  return function() {
    return localVariable; };
};

var wrap1 = wrapValue(1);
console.log(wrap1());
//1

wrapValue(6)();
console.log(wrapValue(6)());
//6

//Note in above we have to still call our inner function so we save wrap1 = wrapValue(1); which is equal to the nested function, which returns the local variable.
```

Above, the local variable var localVariable = n gets saved within each function invocation context according to the variable we pass in upon first invocation of wrapValue. We then need to invoke the nested function by invoking the second function.

Note in above that localVariable can be 6 and 1 for each function invocation. They can live in each other's local scope uninhibited by the other.

Let's look at another example that shows that local variables can live on in separate worlds without messing with each other:

```Javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
};
var thrice = multiplier(3);

var twice = multiplier(2);
console.log(twice(6));
```

Above, we've created our own multiplier function that will multiply two arbitrary numbers. We could set our own invocation of twice and this would multiply anything by two.

Marijn talks about a dope way to think about functions in this way. They are like an octopus that has just woken up. KIDDING!

The function keyword freezes a function body and wraps into a package for further use. Above, multiplier returns a frozen set of code, good for later use. We;ve stored the code in the twice variable. When we call this function, the code gets activated with our original argument that we passed into the multiplier function (which was two). This is another example of closure. That original 2 parameter stays within the package of twice, in its little universe.

## Recursion

It's cool for a function to call itself as long as it doesn't blow the stack. In looping, we can have an infinite loop for for/while/do when there is no condition that eventually evaluates to false. Recursive functions run the risk of having too many function calls AKA "blowing the stack". Functions that call themselves are recursive. Let's refactor our power function to make it recursive:

```Javascript
function power(base, exponent) {
   if (exponent === 0)
   //Below just return 1 because anything ^0 = 1.
     return 1;
  else  {
    //console.log(power(base, exponent -1));
    return base * power(base, exponent - 1);  
  }
};    

//power (2,3);

return 2 * (power(2,2));
return 2 * (2 * (power(2,1)));
return 2 * (2 * (2 * (power(2,0))));
return 2 * (2 * (2 * (1)));
return 2 * (2 * (2));
return 2 * (4);
return 8;

power(3,4);

return 3 * power(3,3);
return 3 * (3 * power(3,2));
return 3 * (3 * (3 * power(3,1)));
return 3 * (3 * (3 * (3 * power(3,0))));
return 3 * (3 * (3 * (3 * 1)));
return 3 * (3 * (3 * (3)));
return 3 * 3 * 3 * 3;

power(5,4);
return 5 * power(5,4);
return 5 * (5 * power(5,3));
return 5 * (5 * (5 * power(5,2)));
return 5 * (5 * (5 * (5 * power(5,1))));
return 5 * (5 * (5 * (5 * (5 * power(5,0)))));
return 5 * (5 * (5 * (5 * (5 * 1))));
return 5 * (5 * (5 * (5 * (5))));

//looping version of power
var result = 1;
for (var i = 0; i < 4; i++){
  result *= 6
}


//OKKKKKKKKK so recursion looks like the above. Importantly at the end of the function, the last multiple equals 1 so the recursion can end.
//Also, the function starts with a base value ,much like



  //else branch = original base is included, thus we subtract 1 from the exponent because we already have one instance of base taken care of.
  //Here we're running our function until exponent === 0. I bet if we take out that condition we'll blow the stack.
  //The recursive call takes us back to the body of the function each time the exponent gets subtracted by 1)
```

Above, the function calls itself multiple times with different arguments to achieve the repeated multiplication.

Recursion is also slower! The above is 10 times slower than just looping for our power function. This means we have a debate as programmers: human-friendliness vs. computer friendliness. The recursive example above is more-human friendly, but not more machine-friendly because it is more elegant for our eyes but takes more of a toll on our computers.

This provides for a debate - do we optimize easier to read and elegant code or machine efficiency?

Marijn's thesis: don;t worry about efficiency until the program is fersure too slow.

Many novice programmers focus "fanatically" on efficiency and thus make long (more loops etc) and confusing programs.

However! While the power example is most likely better to be achieved using looping, this does not mean that there are no examples where recursion is preferable. Many times recursion is better when there are several branches (if/else) to choose from.

Example time!

Let's start with the number 1 and add 5 or multiply by 3 an infinite amount of numbers can be produced (up into infinity. Let's write a function that tries to find a sequence of additions and multiplications that produce that number. For example, the number 13 could be reached by first multiplying by 3 then adding 5 twice. 15 can't be reached at all. Always starting from one.

Recursive solution:

``` Javascript
function findSolution(target) {
  function find(start, history) {
    if (start === target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, '(' + history + ' + 5)') || find(start * 3, '(' + history + ' *3)');
    };    
    return find(1, "1");  
};

function firstFacotorial(num) {
  var result = 1;
  for (var i = num; i > 0; i--) {
    result *= i;
    //console.log(result);
  }  
  return result;  
};

```

what's going on? The inner function, find, is the function that does the recursing. Find takes two arguments, the current number and a string which shows the history of how we got to that number. find returns either a string (in the case of history or null).

To achieve the goal of returning the history of how to get to a certain number, the function does 3 thing:
- if the current number is the target number, than the "way to get to the target number" is simply the current history. How do you get to 3 starting at 3? Just stay at 3.
- If the current number is greater than the target number, than stop at the last iteration of writing more numbers to the history (in this case we stop because we can only add more by either adding or multiplying).

- Finally, if our current number is still below the target we enter into the else block and if the first call returns something other than null (if we can add 5 to our current number) than the function calls itself possibly twice. If the first call is something that's not null, it's returned. Otherwise the second call is returned

- What seems to be happening is the following. In the case of 13 for findSolution, the following happens:

``` JavaScript
function findSolution(target) {
  function find(start, history) {
    if (start === target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
      find(start * 3, "(" + history + " * 3)");
  }  
  return find(1,"1");      
};


findSolution(24);
  find(1,"1");
    find(6, "(1 + 5)");
      find(11, "((1 + 5) + 5)");
        find(16, "(((1 + 5) + 5) + 5)");
          find(21, "((((1 + 5) + 5) + 5) + 5)");
            find(25, "(((((1 + 5) + 5) + 5) + 5) + 5)");
              //too big
            find(63, "(((((1 + 5) + 5) + 5) + 5) * 3)");
              //too big
          find(48, "((((1 + 5) + 5) + 5) * 3)");    
            //too big
        find(33, "(((1 + 5) + 5) * 3)");
          //too big!
      find(18, "((1 + 5) * 3)");
        find(23, "(((1 + 5) * 3) + 5)");
          find(28, "((((1 + 5) * 3) + 5) + 5)");
            //too big       
          find(69, "((((1 + 5) * 3) + 5) * 3)");
            //too big
        find(54, "(((1 + 5) * 3) * 3)");
            //too big     
  find(3, "(1 * 3)");
    find(8, "((1 * 3) + 5)");
      find(13, "(((1 * 3) + 5) + 5)");
        find(18, "((((1 * 3) + 5) + 5) + 5)");
    find(24, "(((1 * 3) + 5) * 3 )");                   





findSolution(18);
   find(1,"1");
     find(6, "(1 + 5)");
        find(11, "((1 + 5) + 5)");
          find(16, "(((1 + 5) + 5) + 5)");
            find(21, "(((1 + 5) + 5) + 5) + 5)");
            //too big
          find(48 "((1 + 5) + 5) + 5) * 3)");
             //too big
       find(33, "(((1 + 5) + 5)) * 3");
           //too big
      find(18, "(1 + 5) * 3)");
      //found!                
//
```

- Above, findSolution does the following. We look for a path to find a certain number starting from one and adding 5 or multiplying by 3. Let's say we pass in 1 as our target. In this case, start === target, because 1 is the start (hardcoded that into the return statement), and we'll just get 1 back.



- Need to write a blog entry about two recursive examples, power and find solution. Seems like "" have been reduced in the history. "" have been reduced because we are performing string concatination in which multiple strings become a single string.


##Growing Functions!
We usually use functions when two situations occur:
1. We are writing similar code again and again. Writing more code is the enemy because this means more room for errors and more for other programmers to have to understand.
2. Need functionality/ability that we don't have yet that should get it's own function. For example we don't need to write functions to log somethign to the console because theres already a built in function to do that. However, if we need a power function than we're going to need to write it because it's not built in.

Marijn has an interesting note about naming functions. "how difficult it is to find a good name for a function is a good indicator of how clear a concept it is you're trying to wrap." Again power is very clear, add, subtract. These are all functions that are very semantic that we could write. The conecpt of what these functions do are pretty straightforward.

Example of how naming a function is important. We want to write a function that prints two numbers followed by the strings "Cows" and "Chickens". We want 0's placed before the numbers so the digits are always 3 letters long.

```Javascript
function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3)
   cowString = "0" + cowString;
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while (chickenString.length < 3)
   chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
};

//Note that we can't do cowString += "0" here because:
//  cowString += "0"  is cowString = cowString + "0" and we want:
//  cowString = "0" + cowString; We want the 0's in the front!

//Farmer calls us and tells us that there are to be pigs added as well! Instead of copying and pasting another parameter, let's try and make a new function with less repetition!

function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);
  while (numberString.length < 3)
    numberString = "0" + numberString;
  console.log(numberString + " " + label);  
};

//now we want a function to print everything at once. Note how we've used our printZeroPaddedWithLabel function within this function and it's just an aggregate for cows, chickens and pigs.

function printFarmInventory2(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

//The above function works great to achieve our goal, but we can make the function more semantically in terms of a single concept. Zeropadded with label is doing too much for a single function

function zeroPad(number, width){
  var string = String(number);
  while(string.length < width)
   string = "0" + string;
  return string;
}

function printFarmInventory3(cows, chickens, pigs) {
   console.log(zeroPad(cows, 3) + " Cows");
   console.log(zeroPad(chickens, 3) + " Chickens");
   console.log(zeroPad(pigs, 3)+ " Pigs");

}


```

Based on the above simple zeroPad function, we could make nice aligned rows of tables 3 digits wide, or however many digits we decide to make them wide. This modular simple function is very important because it works and doesn't have any side effects and we can use it to build out more complicated functions.


#Function and Side Effects

Functions divided into two categories (though 1 function can of course do both of these):
  1) funcs called for side effect. In the above example, printZeroPaddedWithLabel is a helper function that is used (called) for its side effect of printing a line. Note no return statement.

  2) funcs called for return value. zeroPad is used for the value it returns, which is the arbitrary length of a string of numbers. This function is more useful than the first because it can be used for other functions that might not want to print farm info, but will want to print blocks of numbers with labels. Functions with return values are easier to combine than funcs with side effects (we;d have to deal with the line printing if we combined the printZeroPaddedWithLabel function).

  "Pure" functions are functions that return the same value no mater what context. They aren't affected by changes to global variables elsewhere in the program. Marijn says we can visualize such functions simply as thier result because they will always give that result no matter what chanegs happen to the enviornment in our program.

#Summary
