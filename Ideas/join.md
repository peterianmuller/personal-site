## The join method does this interesting thing with the parameters when we use the Array keyword. 

```javascript
console.log(Array(5).join(" " + 4));
// [ 4 4 4 4]

```

Note that with Array, we are creating an empty array that has 5 elements. We can use the join method to turn the newly created array into a treaing and populate thta string with what we pass into the args for join