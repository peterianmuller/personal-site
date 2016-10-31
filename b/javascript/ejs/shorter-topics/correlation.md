Chapter 4 introduces the idea of correlation and how we can use objects and arrays to store data relating to computing correlation. Correlation is "the measure of dependence between variables". We can use the [phi coefficient](http://www.pmean.com/definitions/phi.htm) to find the relationship between binary variables. 

Correlation fits in well with the problem that we are trying to solve throughout the chapter. The issue is that we have a homie Jacques, who keeps turning into a squirrel. Luckily, he has decided to keep a journal of his daily activities and if he turned into a squirrel that day. 

Haverbeke describes how the journal entries are best kept in an array and how each individual entry is suited for the type object(63). This is because objects are built of key value pairs that we can add and remove as we please. We cold decide to store the individual entries in arrays, which might look like:

```javascript

var entry = [["touched tree", "ate peanuts", "brushed teeth"], true];

```

We would assume that `entry[0]` refers to the events of that day and `entry[1]` refers to squirrelification.

However, when comparing this setup to an object setup it becomes clear why the syntax of a plain object would be preferable for this type of data:

```javascript
var entry = {
	events: ["touched tree", "ate peanuts", "brushed teeth"], 
    squirrel: true;
}    

//improved semantics of access:

console.log(entry.events); // ["touched tree", "ate peanuts", "brushed teeth"]
```

Now we can access the events property of the entry by name instead of by index number.


Haverbeke has a dope example of abstracting the process into a function

```javascript
var journal = []; //array

var addEntry = (events, didITurnIntoASquirrel) => {
	journal.push({
	  events: events,
	  squirrel: idIturnIntoASquirrel 
	});
}

addEntry(["touched tree", "brushed teeth", "funky chicken"], false); // didITurnIntoASquirrel will point to a Boolean. This will become the value for the key "squirrel" in the entry.
```

Correlation aside!

So now we've got a journal populated with events and a binary variable of squirrelification. AT first glance it seems like we've only got 1 binary variable: squirrel or no squirrel. However, we can think of an event occurring or not as a binary variable as well. If we consider that we can apply the phi coefficient to each event in our journal.

Here is a psudocoded version of the formula for phi. This obviously isn't the correct syntax for any type of language, but the idea is mostly there:

phi = n11n00 - n10n01 / sqrt((n10 + n11) * (n01 + n00) * (n00 + n01) * (n10 + n11))

The central idea behind the phi formula is that we need a table of 4 conditions. Let's utilize the example of pizza being our event and squirrelifcation being our condition. The table we need is :

![Alt text](http://eloquentjavascript.net/img/pizza-squirrel.svg)

# of times each condition occurred: 

no pizza, no squirrel (n00) : 76
no pizza, squirrel (n01): 4
pizza, no squirrel (n10): 9
pizza, squirrel (n11) : 1


The formula for the phi coefficient is:

![Alt Text](https://wikimedia.org/api/rest_v1/media/math/render/svg/215a1b9c47f5f7114ffb877b7f79f540a38044dc)

Haverbeke describes how we can plug the numbers from our pizza squirrel data into the formula (68):


(1 * 76 - 9 * 4 ) / Sqrt(10*80*5*85)

Phi is around 0.069, which isn't close to 1 or -1 so there is no correlation between eating pizza and becoming a squirrel.


We've seen how to use the phi formula with a 2 by 2 table, so how would we represent a 2 by 2 table in JavaScript? Haverbeke suggests that we can use a single array. The indices of the array correspond to each place in the table. Our original table was a two-bit binary number with the pizza variable representing the left-most digit. However, in the text Haveberke has us making the left-most digit, such that:

n00  no squirrel no pizza (decimal: 0)
n01  no squirrel pizza (decimal: 1)
n10  squirrel no pizza (decimal: 2)
n11  squirrel pizza (decimal: 3)

Note that the values in decimal conveniently are the index values for an array with 4 elements: [0,1,2,3]. Thus our table will be:

[n00, n01, n10, n11], which for our pizza example is: [76, 9, 4, 1].

Now that we have a data structure that JavaScript likes (an array representing a 2 by 2 table), let's write out the phi formula in JavaScript:


```javascript

phi = table => {
  return ((table[3] * table[0] - table[2] * table[1]) / Math.sqrt( (table[2] + table[3]) *
     (table[0] + table[1]) *
     (table[1]+  table[3]) *
     (table[0] + table[2]) ))
}

```

Cool, so now we can compute phi based on a table. However, we need a way to create these tables from our data set. In order to do this we must:

"loop over all the entries and tally up how many times the event occurs in relation to squirrel transformations" (69).
 
 ```javascript
 // checking if an entry in the journal has an event
 hasEvent = (event, entry) => {
   return entry.events.indexOf(event) !== -1;
 }

 //creating two-two arrays for a given event from the journal data

 tableFor = (event, journal) => {

   //create a table. All 0's because at the beginning there has been no event and no squirrlification
   var table = [0,0,0,0];
   for (var i = 0; i < journal.length; i++) {
     var index = 0, entry = journal[i];

     // if the event is present than we need to move the index from the initial index
     if (hasEvent(event, entry)) index += 1;

     //if squirrel is present move index 2
     if (entry.squirrel) index +=2;

     table[index]++;

   }
   return table;
 }

 console.log(tableFor("bushed teeth", JOURNAL));
 //[ 85, 0, 5, 0 ]

 console.log(tableFor("pizza", JOURNAL));
 // [ 76, 9, 4, 1 ]

 ```

Now we have a few pieces of the puzzle - `phi` and `tableFor` can work together to provide us with phi coefficients for each event and that events singular impact on squirrelification.

We could potentially be done here, we would just calculate each phi for each event. We could store them in a map - which is a way of using objects "to go from values in one domain (in this case, event names) to corresponding values in another domain ( in this case phi coefficients)" (70).

One way to create such a map would be:

```javascript

var map = {}

storePhi = (event,phi) => {
  map[event] = phi;
}

var pizzaPhi = phi(tableFor("pizza", JOURNAL));
console.log(pizzaPhi); // 0.069

storePhi('pizza', pizzaPhi);
console.log(map); // {pizza: 0.69}

```

Cool, so the next function is awesome. In `gatherCorrelations` we use our various helper functions to create a map of phi coefficients for our JOURNAL.

```javascript

gatherCorrelations = journal => {

  //map we'll be populating
  var phis = {}
  
  //iterate over each entry in journal
  for (var entry = 0; entry < journal.length; entry++) {

    // create a variable events to have the events array of the current entry stored in a variables
    var events = journal[entry].events;

    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phi)) {
        phis[event] = phi(tableFor(event, journal));
      }
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);

console.log(correlations.pizza); // 0.69


```
Sicc!

So Now we have a map of correlation between events and squirrelification for our JOURNAL!

Haverbeke goes through some more dope work that we can do on our `correlations` map. We talked about how phi coefficients that are close to 1 or -1 mean there is a relationship between the two variables. Let's check out the correlations that are greater than 0.1 or less than -0.1:

```javascript
for (var event in correlations) {
  if (correlations[event] > 0.1 || correlations[event] < -0.1) {
    console.log(event + ": " + correlations[event]);
  }
}

//weekend: 0.13719886811400708
//brushed teeth: -0.3805211953235953
//candy: 0.12964074471043288
//work: -0.13719886811400708
//spaghetti: 0.242535625036333
//reading: 0.11068280537595927
//peanuts: 0.59026798116852

```

Haverbeke notes that "brushed teeth" event has a phi closest to -1 and "peanuts" is closest to 1. He then creates a really dope program to check if there is a correlation when Jacques eats peanuts but does not brush his teeth:

```javascript
for (var i = 0; i < JOURNAL.length; i++) {
  if (hasEvent("peanuts", JOURNAL[i]) &&
    !hasEvent("brushed teeth", JOURNAL[i])) {

    //adding a "new" event of eating peanuts and not brushing teeth:
    JOURNAL[i].events.push('peanut teeth');
  }
}

console.log(phi(tableFor('peanut teeth', JOURNAL)));

//1

```

So if we know that Jacques eats peanuts and refuses to brush his teeth than he will be a squirrel that night. Sad!

This example has been a dope deconstruction of a problem. We asked what made Jacques go through his strange lycanthropy and provdied with the data of journal entries, we were able to program a way of finding out the answer to this question. 

Objects and arrays were important for this algorithm. The conveniences of iterating over arrays facilitated looping over the journal entries while the arbitrary key-value pairs of objects allowed a semantic-friendly data structure for each individual entry.





TODO: Extrapoliate correltation to other situations: comparing an event/condition with the existance of another variable. For example: Bumgarner pitched (Y/N) Giants win (Y/N)

var data = [no win no bum, no win bum, win no bum, win bum]












