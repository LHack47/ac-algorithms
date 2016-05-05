//Fibonacci Challenge!

//Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

//The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

//As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

//Input = any number
//Output = sum of the odd* numbers less than the given number in the fibonacci sequence

//Will be using a modulo to check for oddness


function sumFibonacci(num) {
  	//Create variables to hold the starting number, the next number in the sequence, and the final number (the sum).
  	var previousNumber = 0;
    var currentNumber = 1;
    var finalNumber = 0;
    //Use a while loop to make sure the current number is not greater than the parameter
    while (currentNumber <= num) {
    //Use a conditional to make sure that the number is odd (using the module)
        if (currentNumber % 2 !== 0) {
    //If it is odd, push the number to the final number
            finalNumber += currentNumber;
        }
    //Add the start number to the current number
        currentNumber += previousNumber;
    //Make sure that the previous number is now set to the new number
        previousNumber = currentNumber - previousNumber;
    }

    console.log(finalNumber);
}




//TEST CASES
//sumFibonacci(1000); should return 1785.
//sumFibonacci(4000000); should return 4613732.
//sumFibonacci(4); should return 5.
//sumFibonacci(75024); should return 60696.
//sumFibonacci(75025); should return 135721.