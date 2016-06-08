//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

//Calling this returned function with a single argument will then return the sum:

//var sumTwoAnd = addTogether(2);

//sumTwoAnd(3) returns 5.

//If either argument isn't a valid number, return undefined.

function addTogether() {
  // Function to check if a number is actually a number and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers, handle the case where one is not. Return the addition if both are numbers.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined; //or console.log
    } else {
      return a + b; //or console.log
    }
  } 
  else {
    // If only one parameter was found, return a new function that expects two arguments.
    // Store the first argument before entering the new function scope.
    var c = arguments[0];
    // Check the number again.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if both are numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}


addTogether(2,3);

//Test Cases

// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.