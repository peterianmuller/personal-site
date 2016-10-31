Atomic data types in JavaScript cannot be changed without replacing that value with a whole new value:

```javaScript
var myDopeString = "dope";

myDopeString[4] = "!";

console.log(myDopeString); // "dope"

var myDopeNumber = 5;

myDopeNumber++;

console.log(myDopeNumber); 6 (The value 5 has been replaced with the value 6, an entirely new number value.)

```

In contrast, objects can be changed by adding and removing properties. If a variable makes a reference to an object, that object can be changed and still remain the unaffected parts of the object that existed before the alteration (65-66).

```javascript

var person = {name:"Julio", favoriteIceCream: "rocky road"};

var user = person;

var bro = {name:"Julio", favoriteIceCream: "rocky road"};

console.log(user == person); // user and person make reference to same object.

console.log(bro == person); // false. bro and person make reference to different objects that happen to contain the same contents.

```

This means that when we want to compare objects, arrays, or functions we need to make sure that examples of each of these types that contain the same contents won't be equivalent unless they make reference to the same object in memory:

```javascript

checkUser = userObj => {
  return userObj === {userName: userObj.userName, age: userObj.age};
}

console.log(checkUser({userName:"peteMull", age: 28})); //false - not the same object, same contents

//edit:

checkUserBetter = userObj => {
	return userObj.userName === userObj.userName && userObj.age === userObj.age;
}

console.log(checkUserBetter({userName: "peteMull", age: 28})); 

//true. Now we're comparing the contents of the object, not the entire object itself. The contents of the object are atomic data types, which can be compared for equivalency

```