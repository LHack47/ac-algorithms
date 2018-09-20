//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

//Input: radius, a number
//Output: value of the calculation (number) OR the sentence (a string)

//Add radius as the parameter for our function
function circleCalculation(radius) {
	//calculate the area of the circle, store the value in a variable
	var area = Math.round(Math.PI * Math.pow(radius,2));
	//calculate the perimeter, store the value in a variable
	var perimeter = Math.round(2 * Math.PI * radius);
	//create a sentence that concatenates the values in the sentence
	var sentence = "The area of the circle is " + area + " and the perimeter of the circle is " + perimeter + ".";
	//return the value of those calculations OR return a sentence
	return sentence;
}

var circleSentence = circleCalculation(10);
console.log(circleSentence);