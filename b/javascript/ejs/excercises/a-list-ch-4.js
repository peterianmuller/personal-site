// "Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list if a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on." (78).

//AKA the list allows us to keep building up combinations of values. I presume that this could be done using nested arrays, but arrays don't have the same arbitrary key-value pair options. 

// an example of a list as provided by Haverbeke is:

var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
}

//console.log(list);


// "The nice thing about lists is that they can share parts of thier structure. For example, if I create two new values {value:0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both indepdendent lists, but they share the structure that makes up thier lst three elements. In addition, the original list is also still a vlaid three-element list"

//AKA we declare our list variable and it is a perfectly respectable listo n it's own. We can add it to the end of other lists and that doesn't change it's original structure.

var otherList = {
	value: "pete",
	rest: list
};

console.log(otherList);

  // { value: 'pete',
  // rest: { value: 1, rest: { value: 2, rest: [Object] } } }

// This doesn;t affect our original list:

console.log(list);

//{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }


// "Write a function arrayToList that builds up a data structure like th eprevious one when given [1,2,3] as argument, and write a listToArray function that produces an array from a list."


arrayToList = array => {
	var list = {};
	for ( var i = array.length - 1; i >= 0; i--) {
		
		// Last element in array === mist nested node of list
		if (i === array.length - 1) {
          list = {value: array[array.length -1], rest: null};
		}

		//Adding more nodes to the list from the most nested up. Note that the restp roperty of the object will contain the built up list we have so far.

		else {
			list = {value: array[i], rest: list}
		}
	}
	return list;
}

console.log(arrayToList([1,2,3]));

// List to Array:

listToArray = list => {
	var array = [];

	//using a for loop to traverse a list is tripped out. we set the variable node to list. we then use the check to see if the nodes.rest variable is valid (the test simplystates node, which is going to be set to list.rest. If list.rest === null, we're done)

	for (var node = list; node; node = node.rest) {
		  array.push(node.value);
	}
	return array;
}

console.log(listToArray(list));

var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
}


//" Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, "

//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}


prepend = (element, list) => {
  if (!list) {	
    var list = {value: element, rest: null};
  } else {
  	list = {value: element, rest: list};
  }   
  return list;
}

// console.log(prepend(20, null));
// console.log(prepend(10, prepend(20, null)));

//prepend is dope. We just add another node to the front of the list,



prepend = (element, list) => {
	if (typeof list !== 'object') {
      var list = {value: element, rest: null}  
	} else {
		list = {value: element, rest: list}
	}
	return list;
}

console.log(prepend(20, null));
console.log(prepend(10, prepend(20, null)));


//and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

nth = (list, number) => {
	return listToArray(list)[number];
}

//If you haven’t already, also write a recursive version of nth.

nthRecurse = (list, position) => {
  
  //return the element in the list that corresponds to the positon.

  //options:
  //make an array	
  var array = listToArray(list);
  
  //Note that that positioning for lists starts at 1.
  if (position === 1) {
  	return array[position];
  } else {
  	array.pop();
  	return nthRecurse(arrayToList(array), position - 1);
  }
}

console.log(nthRecurse(arrayToList([1,2,3]), 2));




