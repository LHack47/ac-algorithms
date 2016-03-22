//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user.

//Bonus: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"
//Bonus: Make both numbers whole integers (aka round to the nearest integer) 

function circleCalculation (radius) {
	var area = Math.round(Math.PI * 2 * radius);
	var perimeter = Math.round(Math.PI * radius * radius);
	console.log("The area of the circle is " + area +", and the perimeter is " + perimeter +".");
}

circleCalculation(10);