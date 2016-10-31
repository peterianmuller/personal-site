# Test Suites: a Dope Tool for Debugging

So let;s say we have the two function below to determine absolute value. (Fsho absElse is a better function b/c its more DRY).

```Javascript
function abs(x) {
  if (x > 0) {
    return x;
  }
  else if (x === 0) {
    return 0;
  }
  else {
    return (-x);
  }
};

function absElse(x) {
  if (x < 0) {
    return -x;
  }
  else {
    return x;
  }
};

```

We could test these individually:

```Javascript
abs(-4); //Should be 4
4; // Dope

absElse(-4); //Should be 4
4; // Dope
```

However, we can also use Boolean comparison operators to make sure the invocation of both functions return what we're hoping for:

```Javascript
//The absolute value of -4 is 4 so let's see if our absolute value functions return 4 for each invocation AND compare them to 4:

Boolean((abs(-4) === 4) && (absElse(-4)));

//Note here we are using the built-in Boolean(); function that returns the Boolean value of the parameters.
```

## Side note!

Our test suite in JS vs Lisp shows the efficincy of chaining expressions using prefix notation.

in Scheme we could have done our test suite as:

(= (abs -5) (abs-else -5) 5)
