/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = dashInsert("13");
console.log(result) // "1-3"

**/

function dashInsert(str) {
	//first create an empty variable to hold the new string
	var finalString = " ";
	//turn the number (given as a parameter) into a string and separate the characters
	var numberString = str.toString().split('');
	//create a for loop that runs through all of the numbers in the string
	for (var i = 0; i < numberString.length; i++) {
		//inside the for loop, create an if statement that tests if the number in the array is odd AND if the number next to it is odd
		if(numberString[i] % 2 === 1 && numberString[i+1] % 2 === 1) {
			//the code block should add the number in the i position and a dash if the condition is true
			finalString += numberString[i] + '-';
		}
		else {
			//the code should should just add the number in position i to the finalString variable
			finalString += numberString[i];
		}
	}
	console.log(finalString);
}
