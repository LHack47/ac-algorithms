/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/

//input: a string
//output: a string, alphabetized
//purpose: to alphabetize the list of letters in a given string
//str is our input parameter
function alphabetSoup(str) {
	//turn the string into an array of characters, using split, store the resulting array in a variable, split method takes in a delimiter -- ''
	//Sort the array
	//Join the element in the array back into a string, the argument for the .join() method will be ''
	//Get rid of the spaces in the string using trim
	var characters = str.split('').sort().join('').trim();

	//Second option
	// var characters = str.split('');
	// var array = characters.sort();
	// var newArray = array.join('');
	// var newString = newArray.trim();

	return newString;
}