The arguments object is a dope part of JavaScript that allows the programmer to investigate and reason about the values passed into a function. Because of the JavaScript's liberal nature, any number of arguments could be passed into a function without any warning from the interpreter or sandbox (76).

```javascript

whatsYourName = (name) => {
  console.log("your name is" + name);
}

whatsYourName('Pedro');
//'Your name is Pedro'

whatsYourName('Pedro', 'Laura');
// 'Your name is Pedro'

```

Above we've seen that even though we've passed in two arguments to `whatsYourName`, the function only deals with one named parameter `name`. Let's check out a use of the arguments object to include any number of names passed:

```javascript

var listNames = function() {
  var names = [], argumentsArray = Array.prototype.slice.call(arguments);
  for (var i = 0; i < argumentsArray.length; i++) {
    if (i < argumentsArray.length - 1) {
      names.push(argumentsArray[i] + ", ");
    } else {
      names.push("and "+ argumentsArray[i] + " are the homies!");
    }
  }
  console.log(names.join(''));
}

listNames('julio', 'pete', 'laura', 'luisa');
//julio, pete, laura, and luisa are the homies!


```

A note about `Array.prototype.slice.call(arguments)`. Because `arguments` is not an array, we can't use `arugments.slice()` to make a copy of it. This is invalid JavaScript because we are using `.slice` on a value of type `Object`. 

`.call` is a method that works on function objects that has the ability to specify the `this` binding to the expression that is passed to the first argument. `Array.prototype.slice.call(arguments)` passes the test of using `.slice()` on an array - `Array.prototype` is a valid array, but then we switch the value that slice is reasoning about from the array prototype to the arguments object. Check out mdn's [dope summary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) of the arguments object for more!

In sum, the arguments object frees us from needing to rely on named parameters - like `name` in our first example. Instead we are able to examine the values that are passed in at runtime. 


