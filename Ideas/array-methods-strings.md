We can use array methods for strings! Check out  Josh Clayton's wonderful and indepth [article about this very topics](http://adripofjavascript.com/blog/drips/using-javascripts-array-methods-on-strings.html). The example I provide is a basic application of the possibilites explained by Clayton.

A recent codewars challange by sensei petegarvin1 challanged us to create a function to take in a string of number characters and return a string with all characters 5 or less converted into 0's and 5 and above converted to 1's. My solution:

```javascript
function fakeBin(x){
   return [].map.call(x, function(item) { return item < '5' ? '0' : '1' }).join('');
 };
```

But `x` is a string and there's no `x.split()`!! Because we are technically invoking `.map()` on an array, the interpeter is ok with this. However, then we bind the this context to our string as we pass in the x parameter as the first argument to call. This tells `.map()` to do work on the string, and we pass our anonymous function as the second argument to call, which will refer to the first argument to `.map()`.


Another example of using map with a sting input!

Codewars challange title: Switcheroo by [petegarvin1](https://www.codewars.com/users/petegarvin1). We are supposed to switch the 'a' characters to 'b' characters and vice versa. The input will be a string.

```javascript
function switcheroo(x) {
	
}
switcheroo('acb') --> 'bca'
switcheroo('aabacbaa') --> 'bbabcabb'
```

My solution
```javascript
function switcheroo(x){
  return [].map.call(x, function(item) {
    if (item === 'b') {
      return 'a'
    } else if (item === 'a') {
      return 'b'; 
    } else {
      return item
    }
  }).join('');
};
```

I used the ol' array emthods on strings trick here. Invoke `map` on an empty array then use `.call` to bind the `this` context to the input string and pass the callback to map in as the second parameter to `call`.

A shorter solution with RegEx

```javascript
function switcheroo(x){
  return x.replace(/[ab]/g, (x) => (x === 'a')? 'b':'a')
}
```
Shouts to (ScratchFandango)[https://www.codewars.com/users/ScratchFandango] for the above solution which uses regular expressions (RegExp) and the handy [`.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method to search `x` and replace all 'a' charcters with 'b' characters. Pretty cool that `.replace` takes two parameters, the first being what we're looking to replace and then the second is what we replace it with. Note that the first parameter can be either a RegExp object or a string literal. The second parameter can iether be a string literal which will denote verbatium what we want to replace the string from the first parameter with. Alternatively, we can pass ina function as the second parameter, which will create the new subtring.
