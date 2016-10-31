Okok! Today's codewars challange involves converting an obect to a 'hash', which seems to be a string that lists out the key-value pairs of the input argument. Shouts to the creator of the challange jhoffner. 

The test:

` //solution({a: 1, b: '2'}) // should return "a = 1,b = 2" `

My soultion:

```javascript
function solution(pairs){
 var string = Object.keys(pairs).reduce(function(acc, curr){
   return  acc + curr + " = " + pairs[curr] + ",";    
 }, "").split('');
 string.pop();
 return string.join(''); 
};
```

What I like about this challange is that I tried out using `.reduce()` to build up a result value that grows as the accumulator. The first uses of `.reduce()` that I got used to would build up a single value, such as a sum:

```javascript

var numsToSum = [1,2,3,4];
var total = numsToSum.reduce(function(acc, current){
	return acc + current;
});

total; // 10

```

However, there's no reason why we can't build up a length-based value as the accumulator, such as a string or collections like arrays or objects.

This problem provides an opportunity to expand a reuslt string as the accumulator.

```javascript
function solution(pairs){
 
 var string = Object.keys(pairs).reduce(function(acc, curr){
   return  acc + curr + " = " + pairs[curr] + ",";   

 //acc is set to an empty string that will house the hash as it grows   
 }, "").split('');
 string.pop();
 
 return string.join(''); 
};

Note also the use of `Object.keys(pairs)` which is a dope `object` method that returns an array of the keys in `pairs`. We can acces the values that these keys point to by referencing the pairs object in the callback to reduce: `pairs[curr]`. 
