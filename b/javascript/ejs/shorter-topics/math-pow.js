

power = (base, exponent) => {
  if (exponent === 0 || base === 1) {
    return 1;
  }
  var result = 1;
  if (exponent > 0) {
    for (var i = 0; i < exponent; i++) {
      result *= base;
    }  
  } else if (exponent < 0) {
      for (var i = 0; i > exponent; i--) {
        result *= base;
    }
    result = 1 / result;
  }
  return result; 
};

console.log(power(5,-8) == Math.pow(5,-8)); 
console.log(power(2,3) === Math.pow(2,3));
console.log(power(0,1) === Math.pow(0,1));
console.log(power(0,0) === Math.pow(0,0));
console.log(power(0,6) === Math.pow(0,6));
console.log(power(-2,3) === Math.pow(-2,3));
console.log(power(0,-3) === Math.pow(0,-3));


powerRecursive = (base, exponent) => {
  //termination case
  if (exponent === 0 || base === 1) {
    return 1;
  }

  //basecase

  if (exponent === 1) {
    return base
  } 

  //recursive case
  if (exponent > 0) {
    return base * powerRecursive(base, exponent - 1)
  } else if (exponent < 0) {
    return (1/base) * powerRecursive(base, exponent + 1);  
  } 
};

console.log(powerRecursive(0,-3) === Math.pow(0,-3));

