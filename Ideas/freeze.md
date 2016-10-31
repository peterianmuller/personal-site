The freeze method on objects makes it so there can be no new properties added to an object.

```javascript
var myObj = {name:'peter'}; //instantiating a new object with a name property and value.
Object.freeze(myObj); //invoking the freeze keyword
console.log(myObj); // {name:'peter'};
myObj.age = 28; // adding prop - no changes, see next line:
console.log(myObj); //{name:'peter'} obejct prints out with the same props
``javascript