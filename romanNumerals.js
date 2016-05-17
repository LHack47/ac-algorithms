//Learn to speak like a Roman!

//Convert the given number into a roman numeral.

//All roman numerals answers should be provided in upper-case.

//Here are some helpful links:

//1) What are Roman Numerals? http://www.mathsisfun.com/roman-numerals.html

//2) Array.splice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//3)Array.indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

//4)Array.join() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

//Input: 1) a positive number
//Output: 1) uppercase letters corresponding with Roman Numeral values

//Ideas: Switch, creating matchings arrays, if statements

function speakRoman(num) {
// Create arrays that can be converted with matching indices.
  	var numberValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  	var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

//Create an empty string variable for the final roman number
	var finalRoman = '';

//Run a for loop to go through all of the numbers in the numberValue array
 for (var i = 0; i < numberValue.length; i++) {
    // Continue to loop while the value at the current index will fit into num
    while (numberValue[i] <= num) {
      // Add the Roman numeral to the finalRoman string 
      finalRoman += romanNumeral[i];
      //Decrease num by the numberValue of that particular index each time.
      num -= numberValue[i];
    }
  }

  console.log(finalRoman);
}



speakRoman(2); // "II".
speakRoman(3); // "III".
speakRoman(4); // "IV".
speakRoman(5); // "V".
speakRoman(9); // "IX".
speakRoman(12); // "XII".
speakRoman(16); // "XVI".
speakRoman(29); // "XXIX".
speakRoman(44); // "XLIV".
speakRoman(45); // "XLV"
speakRoman(68); // "LXVIII"
speakRoman(83); // "LXXXIII"
speakRoman(97); // "XCVII"
speakRoman(99); // "XCIX"
speakRoman(500); // "D"
speakRoman(501); // "DI"
speakRoman(649); // "DCXLIX"
speakRoman(798); // "DCCXCVIII"
speakRoman(891); // "DCCCXCI"
speakRoman(1000); // "M"
speakRoman(1004); // "MIV"
speakRoman(1006); // "MVI"
speakRoman(1023); // "MXXIII"
speakRoman(2014); // "MMXIV"
speakRoman(3999); // "MMMCMXCIX