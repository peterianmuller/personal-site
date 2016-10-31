

```Javascript

// while version of power. In this case the counter acts as our exponent
// in a sense because this is the number we tell the loop to stop updating our result variable. Note that the counter variable has to be declared outside of the loop. This is such a common thing that it has been built into the syntax of a for loop.


var result = 1;
var counter = 0;
while (counter < 3){
  result *= 2;
  counter++;
}  

//for loop version of power. Note in this case i acts as both the
//"counter" and the exponent.

var result = 1;
for (var i = 0; i < 2; i++)
  result *=2;
  console.log(result);

//2
//4
//8


//Let's wrap the above into a function. Here we've placed the for loop within a function, which is pretty cool. But what if we can refactor this code one more time to remove the looping and simply call the function to keep updating the "result" to achieve our goal of evaluating a base number to the nth number.

//for loop version of function wrapped into a function

  function power2(base, exponent) {
    var result = 1;
    for(var i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;  
  }



//recursive version. Note that we've combined our "result = 1" with a way to ensure the funtion ends and does't result in a blown callstack. Here, the function calls itself and subtracts 1 from the exponent until the exponent argument becomes 1. Once the exponent argument becomes one the recursive calls stop and the result can be evaluated.

function power(base, exponent) {
  if (exponent === 0)
    return 1;
  return base * power(base, exponent - 1);  
}  

//Let's write out what is happening.

power(2,3);
2 * power(2,2);
2 * (2 * power(2,1));
2 * (2 * (2 * power(2,0)));
//we know that power(n,0) will now return 1 because of our if statement so we can start evaluating our arguments and converting them to values:
2 * (2 * (2 * 1))
2 * (2 * 2);
2 * (4);
8;


```
