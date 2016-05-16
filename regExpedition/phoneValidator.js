/*
** RegEx Class - Example 1 
** Skill level: All Skill Levels :) 
**
** Instructions:
** Write a regular expression to check that a user is using a yahoo or gmail account.
** 

Resources:
	Awesome Regex Tester : http://regexr.com/ 
	Another Pretty Cool Regex Tester : https://regex101.com/
	https://developer.mozilla.org/en/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
	Eloquent JavaScript's Guide to Regex : eloquentjavascript.net/09_regexp.html

** RegEx Class - Example 1 
** Skill level: All Skill Levels :) 
**
** Instructions:
** Write a regular expression to check that a user is using a yahoo or gmail account.
** 

Examples:

var phrase = 'I am a fan of AnnieCannons.com'
var pattern = /[an]/g
console.log(phrase.match(first)); 

var pattern = /[an]/gi
console.log(phrase.match(second));


var pattern = /\W[an]/  
console.log(phrase.match(fourth)); 

var pattern = /\s/g ** Match any whitespace in our sequence. 
console.log(phrase.match(phrase)); 



var num = '123.456.7555'

var pattern = /5{1,2}/g

var pattern = /\d{3}.+/

var pattern 


Resources:
	Awesome Regex Tester : http://regexr.com/ 
	Another Pretty Cool Regex Tester : https://regex101.com/
	https://developer.mozilla.org/en/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
	Eloquent JavaScript's Guide to Regex : eloquentjavascript.net/09_regexp.html

Keymap:
. any character except newline
\w \d \s	word, digit, whitespace
\W \D \S	not word, digit, whitespace
[abc]	any of a, b, or c
[^abc]	not a, b, or c
[a-g]	character between a & g 
a*    0 or more
a+ 1 or more,
a? 0 or one (optional)
a{5} a{2,}	exactly five, two or more
a{1,3}	between one & three
a(boo|baz) : match a with proceed boo and/or baz.


Create a regex pattern that will match all of these phone numbers.
Highly recommend regexr.com to try out different solutions!
**/

var num = '+1(555)555-5555
(555)555-8282
555-555-8282
5555558282';

var pattern = //


/** Possible Solution 
	var pattern /(\+1)?\(?\d{3}\)?\-?\d{3}\-?\d{4}/ 

	Explanation: 

	First, we have a capture group with an escape character to check for a + sign followed by a 1.
	The following ? makes this optional. Next, we escape an optional opening parantehsis and look for a 3 digits, which may be followed by a closing ). 
	For our dashes, we use the escape character to check for -, and the ? makes them option. We then continue on to look for a sequence of {3} then {4} digits. 
**/

