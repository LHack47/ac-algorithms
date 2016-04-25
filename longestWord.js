//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord(["The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

//Input = string with words
//Output = number of letters in longest word
//Need to first break up the string into individual words, find the longest work, and then return the length of that word

function findLongestWord(str) {
  // Create an array by spliting apart the string by spaces
  var newArray = str.split(' ');

  // Sort the array from shortest to largest string using this function to first compare them
  newArray = newArray.sort(function(a, b) {
    return a.length-b.length;
  });
  // The longest string is now at the end of the array and can use pop() to get the length of the longest string in the Array
  var longestWord = newArray.pop().length;

  // return the length of the longest (aka last) string
  return longestWord;
}


//ALSO

function findLongestWord(str) {
//Split string into an array
  var newArray = str.split(' ');
//Create an empty array to store your final array
  var finalArray = [];
//Use a for loop to go through each of the words in the string, split them, and then push their length to your final array
  for (var i = 0; i < newArray.length; i++){
    var splitString = newArray[i].split('');
    finalArray.push(splitString.length);
  }
//Use the Math.max function to find the longest array in your final array. Console.log that number by running the getMax function
    function getMaxOfArray(finalArray) {
    console.log(Math.max.apply(null, finalArray));
  }
  getMaxOfArray(finalArray);
}

