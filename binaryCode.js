//Code Breaking Extravaganza!

//Return an English translated sentence of the passed binary string.

//The binary string will be space separated.

//Here are some helpful links:

// String.prototype.charCodeAt() 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

//String.fromCharCode()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

//input=string of binary code (8 characters)
//output=string of English words

function binaryCode(str) {
 //First split the binary string into separate 8 character blocks
  myString = str.split(' ');
 //Create an array to hold the final string
  finalString = [];
 //Use a for loop to go through each of the items in the split array
 	for(var i= 0;i < myString.length;i++){
 	//parse the value of each binary code block as a method of fromCharCode, and then push to the final string
 	//We are converting the binary to a decimal and then to a letter
   finalString.push(String.fromCharCode(parseInt(myString[i], 2))); 
  }
//Then join the string and console.log (or return) the value
  return finalString.join('');

}

binaryCode("01000011 01101111 01100100 01101001 01101110 01100111 00100000 01101001 01110011 00100000 01110100 01101000 01100101 00100000 01100010 01100101 01110011 01110100 00101110");


//Other Test Cases, what are these saying?

binaryCode("01001100 01100101 01110100 01110011 00100000 01000100 01100001 01101110 01100011 01100101 00100000 01101101 01101111 01110010 01100101");

binaryCode("01001000 01101111 01110111 00100000 01101101 01110101 01100011 01101000 00100000 01110111 01101111 01101111 01100100 00100000 01100011 01101111 01110101 01101100 01100100 00100000 01100001 00100000 01110111 01101111 01101111 01100100 01100011 01101000 01110101 01100011 01101011 00100000 01100011 01101000 01110101 01100011 01101011 00100000 01101001 01100110 00100000 01100001 00100000 01110111 01101111 01101111 01100100 00100000 01100011 01101000 01110101 01100011 01101011 00100000 01100011 01101111 01110101 01101100 01100100 00100000 01100011 01101000 01110101 01100011 01101011 00100000 01110111 01101111 01101111 01100100 00111111");
