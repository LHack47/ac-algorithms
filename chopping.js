//CHOP CHOP!

//Return the remaining elements of an array after chopping off n elements from the head.

//The head means the beginning of the array, or the zeroth index.

//Here are some helpful links:

//Array.slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

//Array.splice() //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//Input: 1) array, 2) the number of how many elements are to be chopped
//Output: The remaining array

function chopper(arr, howMany) {
 //Test to be sure that the number is over 1 (otherwise print the whole array as is)  
   if (howMany < 1){
    	return arr;
  } else {
//Splice the array according to the "howMany" in the whole array length
    	return arr.splice(howMany, arr.length); 
  }
}

chopper([1, 2, 3], 2);

// TEST CASES
// chopper([1, 2, 3], 2) should return [3].
// chopper([1, 2, 3], 0) should return [1, 2, 3].
// chopper([1, 2, 3], 9) should return [].
// chopper([1, 2, 3], 4) should return [].
// chopper(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
// chopper([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].