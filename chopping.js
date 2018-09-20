//CHOP CHOP!

//Return the remaining elements of an array after chopping off n elements from the head.

//The head means the beginning of the array, or the zeroth index.

//Here are some helpful links:

//Array.slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

//Array.splice() //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

function chopper(arr, howMany) {
  // your code here
}

chopper([1, 2, 3], 2);

// TEST CASES
// chopper([1, 2, 3], 2) should return [3].
// chopper([1, 2, 3], 0) should return [1, 2, 3].
// chopper([1, 2, 3], 9) should return [].
// chopper([1, 2, 3], 4) should return [].
// chopper(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
// chopper([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].