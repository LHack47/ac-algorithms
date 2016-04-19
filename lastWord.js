/*
From Google Code Jam 2016 Round 1A

On the game show The Last Word, the host begins a round by showing the contestant a string str of uppercase 
English letters. The contestant has a whiteboard which is initially blank. The host will then present 
the contestant with the letters of str, one by one, in the order in which they appear in str. When the 
host presents the first letter, the contestant writes it on the whiteboard. After that, each time the 
host presents a letter, the contestant must write it at the beginning or the end of the word on the 
whiteboard before the host moves on to the next letter (or to the end of the game, if there are no more letters).

For example, for str = "CAB", after writing the word C on the whiteboard, the contestant could make one 
of the following four sets of choices:

put the A before C to form AC, then put the B before AC to form BAC
put the A before C to form AC, then put the B after AC to form ACB
put the A after C to form CA, then put the B before CA to form BCA
put the A after C to form CA, then put the B after CA to form CAB

The contestant wins the game if their last word is the last of an alphabetically sorted list of 
all of the possible last words that could have been produced. For the example above, the winning 
last word is CAB (which happens to be the same as the original word). For a game with str = "JAM", the winning 
last word is MJA.

You are the next contestant on this show, and the host has just showed you the string str. What's 
the winning last word that you should produce?

Hint: To make a word to be placed later in an alphabetically sorted list, later letters in the alphabet
should to be placed closer to the beginning in the word.

Examples:

console.log(lastWord("CAB")) // "CAB"
console.log(lastWord("JAM")) // "MJA"
console.log(lastWord("CODE")) // "OCDE"
console.log(lastWord("ABAAB")) // "BBAAA"
console.log(lastWord("CABCBBABC")) // "CCCBAABAB"
console.log(lastWord("ABCABCABC")) // "CCCBAABAB"
console.log(lastWord("ZXCASDQWE")) // "ZXCASDQWE"
*/


function lastWord(str) {
	// Your code
}