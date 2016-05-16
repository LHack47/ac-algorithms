//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//Input: A string with letters (ATCG)
//Output: Characters pairs in an array (inside a parent array)

function pairElement(str) {
//Create a map object with all pair possibilities 
  var map = {T:'A', A:'T', G:'C', C:'G'};
//Split the string into an array with each character 
  finalArray = str.split('');
//Use a for loop to go through each of the letters in the new array.
  for (var i = 0; i < finalArray.length; i++){
//Replace each Array item with a nested array using the map variable
    finalArray[i]=[finalArray[i], map[finalArray[i]]];
  }
 console.log(finalArray);
}

pairElement("GCG");


//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]