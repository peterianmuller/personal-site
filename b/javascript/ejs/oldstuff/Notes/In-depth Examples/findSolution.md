```Javascript

function findSolution(target) {
  function find(start, history) {
    if (start === target)
      return history;
    else if (start > target)
       return null;
    else return find(start + 5, "(" + history + " + 5)") ||
    find(start * 3, "(" + history + " * 3)");     
  }
  return find(1,"1");
};

findSolution(13);
  find(1,"1"); //is 1 === 13? no, so skip if branch. Is 1 > 13? no. Skip the else if branch.
    find(6, "(1 + 5)"); // is 6 === 13? no skip if branch. Is 6 > 13? No. Skip else if branch.
      find(11, "(1 + 5) + 5"); // is 11 === 13? No - skip if branch. is 11 > 13? No! skip if else.
        find(16, "(((1 + 5) + 5) + 5)"); // is 16 === 13? no. Skip if branch. Is 16 > 13? Yes! Return null. Here is when the function skips to the other side of the or operator. Since we're adding and multiplying here, we can go back a step and see if that step works with the other side of the or operator.
        find(33, "(((1 + 5) + 5) * 3)"); // is 33 === 13? No, skip if. is 33 > 13? Yes, return null. Go back one call.
      find(18, "((1 + 5) * 3)"); // is 18 === 13? Nope, skip if. Is 18 > 13? Yes! returns null. Go back one call
  find(3, "(1 * 3)"); // is 3 === 13? nope, skip if. Is 3 > 13? Nope skip if else
    find(8, "((1 * 3) + 5)"); // is 8 === 13? Nope. Is 8 > 13? Nope!
      find(13, "(((1 * 3) + 5) + 5)"); // is 13 === 13? Yes! Match    


findSolution(24);
  find(1, "1"); // 1 === 24? Nope, skip if. is 1 > 24? nope, skip if else
    find(6, "(1 + 5)"); // is 6 === 24? Nope. 6 > 24? nope!
      find(11 "((1 + 5) + 5)"); // 11 === 24? Nope. 11 > 24? Nope!
        find(16, "(((1 + 5) + 5) + 5)"); // 16 === 24? nope. 16 > 24? Nope!
          find(21, "((((1 + 5) + 5) + 5) + 5)"); // 21 === 24? nope! 21 > 24? nope!
            find(26, "(((((1 + 5) + 5) + 5) + 5) + 5)");// 26 === 24? nope. 26 > 24 Yup! too big, returns null. move to right side of || operator. Not going to multiply by 3 from here, so let's move back!
            find(63, "(((((1 + 5) + 5) + 5) + 5) * 3)");// 63 === 24? Nope! 63 > 24? yup! null, let's move back one call
          find(48, "((((1 + 5) + 5) + 5) * 3)");// 48 === 24? nope! 48 > 24? Yup!
        find(33, "(((1 + 5) + 5) * 3)");// 33 === 24? nope! 33 > 24? yup! nulll. Let's move back!
      find(18, "((1 + 5) * 3)"); // 18 === 24? Nope! 18 > 24? nope! enter first branch of || operator.
        find(23, "(((1 + 5) * 3) +5)");// 23 === 24? Nope! 23 > 24? nope! let's add 5
          find(28, "(((1 + 5) * 3) +5)");// 28 === 24? Nope! 28 > 24 yup! too big
          find(69, "(((1 + 5) * 3) * 3)");// 69 === 24? Nope! 69 > 24? Yup! null! Let's move back one recursion.
        find(54, "(((1 + 5) * 3) *3)");// 54 === 24? Nope! 54 > 24? yup! Move back one call
    find(3, "(1 * 3)"); // 3 === 24? Nope! 3> 24? nope!
      find(8, "((1 * 3) + 5)")// 8 === 24? Nope! 8 > 24? Nope!
         find(13, "(((1 * 3) + 5) + 5)"); // 13 === 24? Nope! 13 > 24? Nope!
            find(18, "((((1 * 3) + 5) + 5) + 5)");// 18 === 24? Nope! 18> 24? nope!
              find(23, "(((((1 * 3) + 5) + 5) + 5) + 5)");// 23 === 24? Nope! 23> 24? nope!
                find(28, "(1 * 3) + 5) + 5) + 5) + 5) + 5)"); //28 ===24 ? nope! 28 > 24. Yup!!
                find(69, "(1 * 3) +5) + 5) + 5) + 5) * 3"); // 39 === 24? Nope! 39 > 24? Yup! too big!
              find(54, "(1 * 3) + 5) + 5) * 3)"); // 54 === 24? Nope! 54 > 24 yup!
            find(33, "((((1 * 3) + 5) +5) * 3)");//33 === 24? Nope! 33 > 24? Yup!
          find(24, "(((1 * 3) + 5) * 3)");// is 24 === 24? Yup! Match









```
