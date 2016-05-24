//PIG LATIN!

//Translate the provided string to pig latin.

//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

//If a word begins with a vowel you just add "way" to the end.

//Input: string
//Output: 1) string with the first consonant at the end with "ay" added, or 2) a string with "way" added to the end

function translatePigLatin(str) {
//Split the string so that each letter can be analyzed
  var finalString = str.split('');
//Use a switch to go through the first letter and see if it is a vowel or consonant
  	switch (finalString[0].toLowerCase()){
  		case "a":
  		case "e":
  		case "i":
  		case "o":
  		case "u":
 //Push "way" to the words that have a vowel as the first letter, and thne join the word back together
  			finalString.push("way");
            finalString = finalString.join("");
  		 break;
//For words starting with any other letter, shift the first letter, push it and "ay" to the end of the array, and join the entire array
  		default:
  		  var firstLetter = finalString.shift();	
          finalString.push(firstLetter + "ay");
           finalString = finalString.join("");
  	} 
  	console.log(finalString);
}

translatePigLatin("consonant");

// TEST CASES
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "lovegay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".