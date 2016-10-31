A type of problem I've seen again and again involves comparing the contents of two collections are performing some action based on the prescence or absence of items in each. In a recent codewars problem by stevehopkinson, the programmer is provided with a function that contains an array of strings that represent different Geese. The task is to complete the function so that it will return an array of strings that aren't geese.

```javascript
function gooseFilter(birds){
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  //TODO: return an array of birds that aren't geese. I guess geese suck?
}
```

My first idea was to use filter, mostly because the function's name seems to call for it.

```javascript

function gooseFilter(birds){
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function(bird){
    var isAGoose = false;
    geese.forEach(function(goose){
      if (bird === goose) {
        isAGoose = true;
      }
    });
    if (isAGoose){
      return bird;
    }
  });	
}
```

Above I use filter and then the old flag trick to check if one of our elements in the birds array matches any of the elements in the geese array. Each time we run the callback in filter on a successive element of the birds array, I instantiate a `isGoose` variable and set it to false. Then I invoke forEach on `geese` and compare each element in `geese` to the current element in `birds` that filter is passing to it's callback.

But! There is a doper way to check out is an item is present in an array.

```javascript

function gooseFilter(birds){
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function(item){
    if (geese.indexOf(item) === -1) {
      return item;
    }
  });
}
```
Now we're cooking (cooking lines of code that is, you know I'm about that #seamless life). We are using `indexOf` which is a favorite array method of mine. This method is passed a target and returns either the index of that target in the array or -1 if the target doesn't exist. We've replaced our clunky `notAGoose` flag with the functionality of indexOf.
