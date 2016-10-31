A nice codewars challenge entitled Are You Playing Banjo? by [MRodalgaard](https://www.codewars.com/users/MRodalgaard) has us in need of a function that checks if an input names plays banjo or not. People who play banjo have names that start with `"R" or `'r'`. Just off the jump, the language of the spec describes the need to perform one of two actions, the ability to strum sweet chords on the 'jo or not. A cool construct to handle binary choices in the homie ternary operator, so called because it involves three values. 

The task at hand:
```Javascript
function areYouPlayingBanjo(name) {
  // Implement me
  return name;
}
```

The goods:

```Javascript
function areYouPlayingBanjo(name) {
  return name[0] === 'R' || name[0] === 'r' ? name + " plays banjo" : name + " doesn't play banjo";
};
```
The three values here are what appears before the `?`, which will evaluate to true or false, and if that value evaluates to true, than the first value after the `?` is returned. If the first value is evaluated to false than the last expression is returned.


