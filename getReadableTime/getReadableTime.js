/*
Given a number of minutes as an integer, return an object with two properties,
"hour" and "minute", which is equivalent to the input minutes.
Hint: Check out Math.floor function at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Hint: Check out remainder operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder

Bonus 1: Add "day" property

Bonus 2: return -1 if the input is not a number or if 
it is a negative number
*/

/**
Examples:

var result = getReadableTime(102);
console.log(result) // Object {minute: 42, hour: 1}

var result = getReadableTime(12);
console.log(result) // Object {minute: 12, hour: 0}

var result = getReadableTime(1002);
console.log(result) // Object {minute: 42, hour: 16}

var result = getReadableTime(10002);
console.log(result) // Object {minute: 42, hour: 22, day: 6}

var result = getReadableTime("10002");
console.log(result) // -1

var result = getReadableTime();
console.log(result) // -1

var result = getReadableTime(-12);
console.log(result) // -1

**/



function getReadableTime(minutes) {
	//Your code here
	
}