# Chapter 1

# Data and Bits

Everything in a computer is data. Data is saved as long combinations of bits. Bits are anything with two values: 1's and 0's, on and off, weak/strong signals

The storage system of a computer used binary code, which itself is made of bits.

Values are made up of bits. The bits are divided up to make values. so a string is made up a number of bits, a variable is made up of a certain number of bits, function also etc.

6 Basic types of bits (primitive values):

* strings
* Booleans
* numbers
* functions
* undefined values
* objects

We create a value simply by typing it into our enviornment. Once that value is no longer in use the bits it was made up from dissipate back into the "sea of bits"

# Primitive/Atomic/Fundamental Data types

## numbers

Numbers in JS can either be:
   -integers: 6, 8 (whole numbrs)
   -floats: 6.2, 4,5 (nnumbers with decimal points)

Note that floats take up more memory than integers (thus we can use methods to round our floats to the nearest integer Math.floor etc)

Scientific notation can be used for large and small numbers:

```javascript
2e2 // 200
2e-2 // 0.02
```

Also built in method for exponents:

```javascript

Math.pow(base,exponent);
Math.powe(2,3); //8

```

Because 64 bit computers can't be exact with decimal points, it's best to think of decimals as approximations.

What fun things can we do with numbers!?!?

Arithmetic! We can do arithmetic using math operators:

 +

 -

 /

 % (modulo or "remainder", which gives us the remainder. For example (x % y) = remainder of (x / y)

 Special numbers:

 Infinity <br>
 -Infinity <br>
 NaN "not a number". This is returned as the result of a nonsensical math operation. For example:<br>

 ```javascript
0/0 // NaN
Infinity - Infinity // NaN
```

## strings

Strings are the value type that represents text. Strings are created when we wrap characters within single or double quotes:

```javascript
"cat"
"6"
```
However, what if we want quotes inside of our string? We can use a \ or escape key so that the Javascript interpreter parses whatever follows the backslash as a string.

```javascript
console.log('she said \'hello peter!\'');
// she said 'hello peter!'
console.log("The text following this should be on a new line: \n" + "I'm on a new line!");
//The text following this should be on a new line:
//I'm on a new line
```
We can use our handy addition operator with strings! This is called concatination

```javascript
"cat" + " 6"; // "cat 6"
```

## Operators!

We touched on arithmetic operators, but that is just the beginning of fun with operators!

JS operators can be divided up into a few different camps:

* Urinary Operators
* Binary Operators
* Ternary Operators

### Urinary Operators work on one value.

 -makes a number negative

```javascript
6;// positive value
-6;// negative value
```

typeof prints the type of value of whatever comes to the right.

```javascript
typeof "cat"; //"string";
typeof 6; //"number";
typeof NaN;// "number";

```

### Binary Operators work on two values.

The assignment operator = is one of the most common operators in use in JS. The = associates one value with another value.

Also note that - can be both a urinary value (making a number negative) and a binary operator (used as a subtraction sign)

```javascript
-6; //- as urinary operator
6 - 5; //1 - as a binary operator
```
##Boolean values
Boolean values, named after the OG George Boole, can be  equivalent to either true or false

One way of using Boolean values is to use comparison operators to reason about different values.

```javascript
6 > 3; //true;
5 < 3; // false;
5 == 5; //true.
false == 0; //true. This is b/c both false and 0 carry the Boolean value of false.
false === 0; // false. This is false because here we're using  deep comparison and comparing the actual values presented ,not just thier "truthiness" and "falsiness".
Infinity == -Infinity; //false! trippy. Remember that Infinity, -Infinity, and NaN are number types but behave different than numbers.
```

Beware of the comparison operator == which compares the "truthiness" and "falsiness" of different values. It's usually best to stick to using "deep comparison" operators === also known on the streets as "threequals".

##Boolean Operators:

In reasoning about Booleans we can't really use comparison operators that we use with other values like strings and numbers. For example, we wouldn't really want to do the following operations with Booleans:

```javascript
true + true; //2 When we use arithmetic operators, true gets parsed into a number value, 1.  
false + false; //0 When used with arithmetic operators false gets parsed into the number 0.
```

However there are dope operators that enable us to reason about Boolean values in a more productive way. Instead of adding two true values together, suppose we want to see if two values are both equal to true?

### && and

&& AKA "and" checks if the values to the right and left of it both evaluate to the Boolean value of true. If they do, the whole expression will evaluate to true. If either value to the is false, the expression will return false. However, the && will return different values based on where the false value is placed:

```javascript
true && true; // expression is true and will return true
true && false; // expression is false and will return false
false && false; //expression is false and will return false. In this case the interpreter doesn't even evaluate what is to the right of the && operator because the expression is already equivalent to false regardless of what is on the right side of the &&.
false && true; //expression is false and will return false. In this case the interpreter doesn't even evaluate what is to the right of the && operator because the expression is already equivalent to false regardless of what is on the right side of the &&.
false && undefinedVariable; //false;
true && undefinedVariable; // ReferenceError undefinedVariable is undefined. In the above example, the interpreter never evaluates undefinedVariable because it already found a false value in the false to the left of the &&.
```  

We can short-circuit the && by placing a false value on the left side of the operator. Upon evaluating a false value to the left of the && operator, the interpreter will spit out the value and not even evaluate the value to the right.

### || or

The or || Boolean operator will return true if the value on either side of the || evaluates to true.

```javascript
true || true; //evaluates to true and returns true.
true || false; //evaluats to true and returns true. Again the interpreter never reaches the expression to the right side of the operator. So we could do the following:
true || undefinedVariable; // Expression evaluated to true and returns true.
false || undefinedVariable; // Expression returns a reference error.
false || 0; //expression evaluates to false and returns 0.
```

The way to shot-circuit the || operator is to have a true value on the left side of the operator, because the interpreter only needs to find a true value to return true. If that value is supplied on the left side of the operator than the interpreter will simply return the value on the right side of the operator.

### ! Not

This is a urinary Boolean operator that changes the Boolean value of the expression to its right
```javascript
Boolean(!NaN); //true
```
When we chain different operators (arithmetic operators, comparison operators, and Boolean operators it can be repetetive to keep placing everything inside of ()). For example:

```javascript
 ((5 + 1) > 6) && ((2 * (4 - 3)) === 50); // false
```
The JS interpreter has a built-in  mechanism for evaluating the operators in the following way:

 || lowest precedence
 && higher precedence
 <, ==, > highest precedence

 Thus, the comparison operators will be evaluated first, then &&, then ||.

 ```javascript

 5 + 1 > 6 && 2 * 4 - 3 === 50; //false

 ```

### ternary operators

ternary operators reason about three values. It looks like hte following:

```javascript
true ? 4 : 5;
```

There is a Boolean value followed by a ?. After the ? is a value to the left of a : and a value to the right of the :. IF the Boolean value evaluates to true the value to the left of the colon is returned. If the Boolean evaluates to false, than the value to the right is returned.

##Undefined values

So far we've seen 3 types of primitives: strings, numbers, Booleans. The last type of primitive we're going to look at for this chapter is undefined values. There are two types of undefined values: undefined and null.

Undefined and null are values themselves that don't carry any information. They are both of Boolean type false. Many values will return undefined in various JS interpreters and environments.  

#Type Coercion

Javascript accepts many programs to be run even if they contain syntactic errors that can sometimes lead to unintended consequences.

```javascript
8 * null; //0 null gets coerced to a number. null's numeric value is 0 so the expression become 8 * 0 // 0
null + false; //0. null and false are coerced to numeric values and are turned into 0 and we get 0 as a result.
null + (3 > 2); //1
"5" + 1; // 51. strings can concatinate, so the 1 gets parsed into a string here.
5 + "1", // 51
"5" * 5; // 25; strings can't be multiplied so here the string is turned into a number.
"one" * 4; //NaN;
"one" + 4; // "one4" strings can use the + operator, so the 4 gets parsed into a string.
 ```
 Thus, we should be careful with syntactic errors. Sometimes the interpreter won't throw an error message and we'll have to figure out where type coercion happened.

 Also, once NaN gets introduced to a program and is used again, NaN will be the result of subsequent operations.

 ```javascript
var result = "one" * 4;
result + 7; // NaN
result + 0; // NaN
```

A little more in-depth with ==

When we compare values of the same type using == we shoudl get true.

```javascript
5 == 10; // true, truthiness of vales are the same
undefined == undefined; //truth
NaN == NaN; // false. NaN is a value that does not share truthiness with itself.
```

However, when we use double equals sign to compare values of different types the interpreter uses confusing rules to determine truthiness and falsiness. What usually happens is the interpreter tries to convert one value to the other value's type.

There is one rule that we can remember here! When null or undefined is places on either side of the operator, the expression produces true only if both sides are null or undefined.

```javascript
null == undefined; //true
null == null; // true
undefined == undefined; //true
undefined == null; // true
```
We can utilize this behavouir to check if something has a real value by using the == or != with null or undefined. This will work because as we've seen, undefined and null are both values that carry no information. And we know that the above rule about undefined or null on either side of == will return true. Thus if ourValue == null //true or ourValue == undefined // true than ourValue has no value (shares truthiness with undefined or null).

Below we declare a variable that is undefined than compare its truthiness with null using ==. This returns true so result has no value.

```javascript
var result;
result == null; // true.
result != null; //false. still means result has no value.
```
So we can use == to test if something has a value (and isn't undefined or null).

However, == still uses type coercion, so we can use the === to compare precise values.

Rules for strings/numbers as Booleans: 0, NaN, "" // false. Also both undefined values (undefined and null count as false).

```javascript
 0 == false; //true (comparing truthiness with type coercion)
 "" == false; //true
```
However, because the above method == leads to unexpected results, we should go ahead and use === to protect ourselves from unwanted type coercion.

```javascript
 0 === false; //false comparing precise values
 "" === false; // false. Comparing precise values
```

##short-circuiting logical operators

We've seen this before! && and || don't have to evaluate both values based on if the value to the left is either of Boolean true or false.

For ||, which returns true if either the value on the left or the right is true, we can simply place a value with Boolean type true on the left and the whole expression will be evaluated to true and the value on the left will be returned:

```javascript
true || ffffff; // true
false || fffff; //reference error fffff not defined.
```

For &&, if the value on the left is of Boolean type false, the whole expression is false and the value on the left will be returned.

```javascript
false && "cat"; // false
true && false; // false
```

# Summary

For this chapter we looked at four primitive data types:
* strings
* numbers
* Booleans
* Undefined values

These values are created simply by typing thier name: true, "cat", 6, null.

These values can be manipulated and reasoned about using:

* binary arithmetic operators: +, -, /, %
* binary string operators: +
* comparison operators (Binary) <, ==, ===, !=, !==, >, >=, <=,
* logical operators: ||, &&, !
* Ternary operators: true? 5: 7
* urinary operators: - to negative a number (make negative), ! to negative logically (switch Boolean value), and typeof to find a value's type.
