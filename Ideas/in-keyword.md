## in keyword checks for a property in an object and returns true if that property exists or false if it doesn't. Note that we need to place the prop in "" when we use the in keyword, though we don't have to in the object itself.


```javascript
var obj = {
	color: "red",
	age:45
}
console.log("cosss" in obj);
//false
console.log("color" in obj);
// "red"

```