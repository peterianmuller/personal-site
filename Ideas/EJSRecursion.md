#Recursion
Recursion is a wild beast! I wanted to take the time to look at the examples of recursion that are presented in EJS with this blog post.

Recursion is when a function calls itself. There are a few key issues with recursion:

- A way for the function to stop "recursing" or  return something other than another function call is essential. If the function has no way to return a value than it will continue to call itself until the callstack is blown.

- Recursion is also usually slower than using looping mechanism of iteration. However, recursion can be more appealing to the programmar visually and it might be easier to understand what is going on if recursive functions are named semantically.

- Problems that have several branch options are typically easier to solve with recursion. Looping can be faster when we are dealing with pure iteration such as in our first example.

## Our First Example!

Let's write a recursive function that calculates a number to nth power. We will use base and exponent as our parameter names.

```javascript

function power(base, exponent) {
  if (exponent === 0)
    return 1;
  else
    return base * power(base, exponent - 1);  
};

power(2,3);
//8
```

Ok so above we have a conditional within the body of the power function. The if branch here returns 1 when the exponent argument is 0. This makes sense semantically because x^0//1.

The interesting thing here though is when the power enters into the vaunted else branch! At this point power starts recursing (calling itself).

so:

```javascript

power(2,3);
//is exponent argument = 0?
return 2 * power(2,2);
return 2 * (2 * power(2,1));
return 2 * (2 * (2 * power(2,0)));
//At this point our exponent is 0, so the conditional (exponent === 0), which is now (0 === 0) // true. the function invocation power(2,0); is equal to what that function returns, and in this case power(2,0) returns 1.
return 2 * (2 * (2 * 1);
return 2 * (2 * 2);
return 2 * 2 * 2;
return 8;
8;
```

Let's compare this to the looping version of finding an exponent

```javascript

//while version of power
var result = 1;
var counter = 0;
while (counter < 3){
  result *= 2;
  counter++;
}  

//for loop version of power


var result = 1;
for (var i = 0; i < 3; i++)
  result *=2;

//refactor code below as function

  function power2(base, exponent) {
    var result = 1;
    for(var i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;  
  }


```

Our power function looks pretty nice as a recursive function.


Now let's take a look at this wild findSolution function that EJS presents! An infinite amount of numbers can be made by starting from 1 and either adding 5 and/ or multiplying by 5. Let's write a function that shows us the path starting from 1 to get to a number via adding 5 or multiplying by 3

```javascript

function findSolution(target) {
  function find(start, history) {
    if (start === target)
      return history;
    else if (start > target)
       return null;
    else return find(start + 5, "(" + history + " + 5)") ||
    find(start * 3, "(" + history + " * 3)");     
  }
  return find(1,"1");
};

findSolution(13);
//we start with find(1,"1") because that's the first function invocation within the function body. Before that there is just the function declaration!
  find(1,"1")
   //here 1 is our start and our history or path is the string "1". From this starting point both the if (1 === 13) and else if (1 > 13) are false. So the code enters into the "fun" else branch whee the recursion happens.
findSolution(13);
  find(1,"1");
    find(6, "(1 + 5)");
      //at this point we can keep adding 5 because the if and else if branches still evaluate to false.
       find(11, "((1 + 5) + 5)");
         //still ok to enter back into the else branch
         find(16, "(((1 + 5) + 5) + 5)");
            //this time when we invoke find we get null because our start > target. So we can try our second branch of the || statement when start =11.
         find(33, "(((1 + 5) + 5) * 3)");    
             //too big
      //let's try and take the second branch when start is 6.
       find(18, "((1 + 5) * 3)");  
          //too big, so let;s try to take the second branch immediately
      find(3, "(1 * 3)");
         //here we'll try and add 5
        find(8, "(1 * 3) + 5");
          //still ok we'll try and 5 again
          find(13, "(((1 * 3) + 5) + 5)");
              //match!
  //so when we have our start === target we return history so:
  findSolution(13);
  // "(((1 * 3) + 5) + 5)"                              
```

```


```
