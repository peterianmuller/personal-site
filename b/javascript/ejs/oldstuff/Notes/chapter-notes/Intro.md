##Introduction


"A program is many things. It is a piece of text typed by a programmer; it is the directing force that makes the computer do what it does; it is data in the computer's memory, yet it controls the actions performed on this same memory."

Really trippy that programs are data themselves that reason about other data.

I've seen the analogy of a machine many times to serve as a real-world counterpart to a computer program.

"A superficially fitting (analogy) is that of a machine- lots of separate parts tend to be involved, and to make the whole thing tick, we have to consider the ways in which these parts interconnect and contribute to the whole."

The computer itself is a machine, Haverbecke continues "//built to act as  host for these immaterial machnines" (3).

So the computer is a containing machine that holds programs, which are thought of as machines themselves. However, because programs reason about data that they themslves are made of, it's tough for me to fully appreciate the amchine analaogy for programs. It's like a doughnut maker was a doughnut itself.

I think it's beside the point to hammer on the doughnut example and instead appreciate the available accessible similarities between physical machines and invisible computer programs:

- Machines have separate parts - Programs are built of modules that are designed to fufill a unique purpose of the program.

- But these separate parts work together - Programs share global variables, the same global environment and sometimes modules need to communicate with each other.  

- Machines need an on button - Programs use semi colons and function invocation to initiate, continue execution.

## Programming as controlling complexity

"The art of programming is the skill of controlling complexity" (3).

Controlling complexity is the goal of programming and is a central theme for other teachers of the subject:

"The art of programming is the skill of controlling complexity"
Ableson et al stress the importance of understanding "...the techniques used to control the intellectual complexity of large software systems" (Ableson, et al xxii).

"The computer programmer is a creator of universes for which he [sic] alone is responsible. Universes of virtually unlimited complexity can be created in the form of computer programs" (Weizenbaum, cited in Haverbeke 2).

It is not that computers or programs are complex, but instead the universes we which to create are compplex, and programmers must learn how to control that complexity in order to have a functional virtual universe.

## Why Language Matters

Haverbeke stresses that programs can be presented in various ways: less or more readable, more or less understandable to the programmer's eye in addition to functionally sound.

The evolution of a program from unreadable and confusing to readable and more straightforward. Below is a program in binary that will compute the sum of the numbers 1 to 10:

```Javascript

00110001 00000000 00000000
00110001 00000001 00000001
00110011 00000001 00000010
01010001 00001011 00000010
00100010 00000010 00001000
01000011 00000001 00000000
01000001 00000001 00000001
00010000 00000010 00000000
01100010 00000000 00000000

```

The instructions of the previous program could be written in English like:

```Javascript

1. Store the number 0 in memory location 0.
2. Store the number 1 in memory location 1.
3. Store the value of memory location 1 in memory location 2.
4. Subtract the number 11 from the value in memory location 2.
5. If the value in memory location 2 is the number 0,
   continue with instruction 9.
6. Add the value of memory location 1 to memory location 0.
7. Add the number 1 to the value of memory location 1.
8. Continue with instruction 3.
9. Output the value of memory location 0.

```

Here were using a counter variable, total, etc but we haven't named any of these as the variables they represent. "Total" is currently "memory location 0", "count" is currently "memory location 1". Step 4 checks if we've looped through the program 10 times. Since we've started at 1, 10 total loops will mean than 10 loops will mean "memory location 1" and "memory location 2" will both be 11 after 10 loops.

Step 6 adds the value of the current number (1,2,3,etc) to the "total", which has been assinged to "memory location 0". Step 7 increments "count" or "memory location 1" by 1.  Step 8 loops again. Step 9 only happens once 11 - "memory location 2" = 0 or, if we've looped through the program 10 times. At this point, we print out our grand total.

The previous program has more readable instructions than the binary code. However, what if we replaced names of our storage locations like "memory location 0" with what those places actually represent for the universe of our program?

EJS has the following less unreadable code:

```Javascript
Set “total” to 0.
Set “count” to 1.
[loop]
Set “compare” to “count”.
Subtract 11 from “compare”.
If “compare” is zero, continue at [end].
Add “count” to “total”.
Add 1 to “count”.
Continue at [loop].
[end]
Output “total”.
```

Now we're cooking! "total", "count", and "compare" denote not just a place, but the role of that place in our program.  Let's check out the program in JavaScript and see if it's more readable:

```Javascript

var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
// 55

```

Ok dope! So there's no more "loop" written out (Haverbeke 4), and there are only two variables instead of 3. Additionally, there are less lines of code, which is always better is functionality is the same.

Could there really be any more simple ways of finding the sum of the numbers 1-10?

```JavaScript
console.log(sum(range(1,10)));
// 55
```

Holy Smokes! Here we have no variables at all, no incrementing or decrementing, no looping! We have made what was a vary complex set of instructions that required fluency in binary into what is "...almost English".

This shows that if can omit "uninteresting details" like memory locations, looping, superfluous variables, than our programs can be more readable to the human eye. Note that the computer doesn't really care about more readable programs. With the correct interpreter all of these examples would produce the same computational result. However, the human communicative efficiency of the latter program is readily apparent.

## Programs as building blocks

One way of looking at programming is to understand it as a process of building blocks that each control a certain level of complexity, with increasing complexity added with each block.
Haverbeke goes in about the incremental creation of programs at the bottom of page 5:

 "A good programming language...provides convenient building blocks (such as while and console.log()), allows you to define your own building blocks (such as sum and range), and makes those blocks easy to compose."

 This idea of building up a program based on solid blocks is akin to Ableson's idea about this feature's attraction in the Lisp language:

 "(Step-by-step program construction) encourages the incremental development and testing of programs and is largely responsible for the fact that a Lisp program usually consists of a large number of relatively simple procedures".

 A quick examples of using building blocks that deal with increasingly complex ideas to form more complex programs.

``` Javascript

function sum(x,y) {
  return x + y;
}

function square(x) {
  return x * x;
}

function sumOfSquares(x,y) {
  return sum(square(x), square(y));
}

sumOfSquares(2,3);
//13
```

 In our final sumOfSquares API we have written out uninteresting details of addition and squaring. All the user needs to know is the two numbers they would like to square and then add together.

 ## Issues with "Liberal" JavaScript.

Javascript is "liberal" which means it allows many computations within programs that other languages won't allow (6). This is a double edged sword:

- Liberal: Many things allowed, less obvious errors

- Liberal: Many things allowed, more diverse solutions to problems.

Also dope to see that JavaScript has grown from a language that was only in the web browser to

A) being used in databases: MongoDB and CouchDB

B) Available to some desktop/server programming with node.js
