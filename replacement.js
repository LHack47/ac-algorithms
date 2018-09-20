//We need to replace some words that our users input to make sure that they are consistant throughout our program.

//Perform a search and replace on the sentence using the arguments provided and return the new sentence.

//First argument is the sentence to perform the search and replace on.

//Second argument is the word that you will be replacing (before).

//Third argument is what you will be replacing the second argument with (after).

//NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

//HINTS: 
//1) Array.splice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//2) String.replace() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//3) Array.join() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

function performReplace(str, before, after) {
  //your code here
}

performReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//TEST CASES
//performReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
//performReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
//performReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
//performReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
