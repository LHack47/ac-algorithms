//Let's learn spinal case!!

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//Input: a string
//Output: that same string but with all lowercase words joined by dashes

//Methods we might use--> .toLowerCase(), .split(), .join()


function spinalCase(str) {
  // Create a variable for the white space and underscores that already exist between the words.
  var spaces = /\s+|_+/g;

  // find each occurance of a lower case character followed by an upper case character, and insert a space between them:
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  console.log(str.replace(spaces, '-').toLowerCase());
}

spinalCase("This Is Spinal Case");

// spinalCase("This Is Spinal Case") should return "this-is-spinal-case".
// spinalCase("thisIsSpinalCase") should return "this-is-spinal-case".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".