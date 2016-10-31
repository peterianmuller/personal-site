"(B)eing able to reference a specific instance of local variables in an enclosing function-is called closure. A function that "closes over" some local variables is called a closure," (49). 

We have [seen](scopes.html) that functions have the ability to create local variables that only exist in their scopes. Haverbeke describes how a closure can provide a way for a program to access local variables from a wider scope.

A simple example of this:

```javascript

var returnLocalVariable = function(n){
	var localVariable = n;
	return function(){
	  return localVariable;
    }
}

var save1 = returnLocalVariable(1);
console.log(save1); // [Function] 
console.log(save1()); //1

var saveHello = returnLocalVariable('Hello');
console.log(saveHello); //[Function]
console.log(saveHello()); // 'Hello'

```

So here `returnLocalVariable` creates a local variable `localVariable` and has it point to the argument passed to `returnLocalVariable`. The function then returns another function that takes no arguments and returns `localVariable`.


Based on the hierarchy of scopes, we should not be able to return `localVariable` because it's not returned in the scope of `returnLocalVariable`, but instead returned in the function that `returnLocalVariable` returns.

However, clearly based on the examples in the code above we are able to access the value 1 in `save1` and `Hello` in `saveHello`. 

This is possible because `save1` and `saveHello` both point to functions - after all the original function `returnLocalVariable` returns a function. We can see this when we log `save1` and `saveHello` to the console and see a function object on our screen. However, we can return `localVariable` by invoking `save1` and `saveHello`. This means we are getting into the nested function's scope, and successfully returning `localVariable`, a value that was declared when we first defined `save1` and `saveHello`.

Also, importantly, each invocation of `returnLocalVariable` doesn't interfere with the other. "In fact, multiple instances of the variable can be alive at the same time, which is another good illustration of the concept that local variables really are re-created for every call-different calls can't trample on one another's local variables"(49). 


Let's check out another example of a closure that does some work outside of simpyl returning a local variable of a nested scope. Haverbeke uses a multiple example, but just to try and differentiate, I'll use a divide function.

```javascript

var divideBy = function(divisor) {
	return function(numerator) {
		return numerator/divisor;
	}
};

var divideByThree = divideBy(3);
console.log(divideByThree(3)); //1
console.log(divideByThree(6)); //2


var divideBySix = divideBy(6);
console.log(divideBySix(4)); // 0.67
console.log(divideBySix(12)); // 2

```

`divideBy` provides takes in one parameter that will serve as the divisor and then returns a function whose paramter will be a numerator. The nested function then returns the division of the numerator by the divisor. What's dope here is that we can declare a function that will have a divisor, and then invoke that function with arbitrary numerators. 

This means we can have a helper function that is more specific than the `/` operator - a function with a dedicated divisor that we can recycle without having to declare a divisor each time we use the function.