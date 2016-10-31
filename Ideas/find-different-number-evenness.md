This problem is entitled IQ Test and was created by
[AlexIsHappy](https://www.codewars.com/users/AlexIsHappy). For this
problem, we are given a string of numbers with spaces and our goal is to
find the position in the string of the number that doesn't match the
others in evenness. Note that the position of the string will be 1 plus
the index.

The two test cases provided are:

<div class="sourceCode">

``` {.sourceCode .javascript}
Test.assertEquals(iqTest("2 4 7 8 10"),3);
Test.assertEquals(iqTest("1 2 2"), 1);
```

</div>

One solution:

<div class="sourceCode">

``` {.sourceCode .javascript}
function iqTest(numbers){
  var mostlyEven = numbers.split(' ').filter(function(item){
    return parseInt(item) % 2 === 0;
  }).length;

  var mostlyOdd = numbers.split(' ').filter(function(item){
    return parseInt(item) % 2 !== 0;
  }).length;

  if (mostlyEven > mostlyOdd) {
    //need to figure out index of odd integer
    var oddIndex;
    numbers.split(' ').forEach(function(item, index){
      if(parseInt(item) % 2 !== 0) {
        oddIndex = index;
      }
    });
    return oddIndex + 1;
  }
  else {
    var evenIndex;
    numbers.split(' ').forEach(function(item, index){
      if(parseInt(item) % 2 === 0) {
        evenIndex = index;
      }
    });
    return evenIndex + 1;
  }    
}
```

</div>

My plan here was to first check if the string provided is mostly odd or
mostly even. I do this by invoking the `split` method on each string and
then filtering only odd numbers and then invoking the same method on
even numbers. Note that I avoid type coercion by using the `parseInt`
function to ensure that each item is of type number and we are not using
string characters in our callbacks to filter.

I then compare the length of each array, and whichever is longer means
there are more of that evenness of number. After establishing if the
string is mostly even or mostly odd, I search for the index of the
number of the opposite evenness and add one to it.

Another solution:

<div class="sourceCode">

``` {.sourceCode .javascript}
function iqTest(numbers){
  var isEven = function(n){
    return n % 2 === 0 }, target, result;
  
  var evens = numbers.split(' ').filter(function(item){
    return isEven(parseInt(item));  
  });
  var odds = numbers.split(' ').filter(function(item){
    return !(isEven(parseInt(item)));  
  });
  
  evens.length === 1 ? target = evens[0] : target = odds[0];
  
  numbers.split(' ').forEach(function(item, index){
    if (target === item) {
      result = index + 1;  
    }
  });
  
  return result;
}
```

</div>

Here I declare a helper function `isEven` which will return true is an
input integer is even. I then create an array of all the even integers
in `numbers` and another with all the odd integers.

I then use a ternary operator to check which array has exactly one item,
and I created a target variable to represent the number we are searching
for. We'd be searching for the one odd number is a mostly even series or
an even number in a mostly odd series.

I then use `forEach` to search through the array created from numbers to
find the index of that target and add one in order to return the
position as described by the spec.
