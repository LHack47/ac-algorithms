//Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

//Helpful Links
//https://dev.w3.org/html5/html-author/charref
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

//Input: a string with a character not suitable for html
//Output: a string with the converted character

function convertHTML(str) {
  // Split the string in order to test each character
  var finalString = str.split('');
  // Create a for loop to go through each of the characters, and use a switch function to test each
  for (var i = 0; i < finalString.length; i++) {
    switch (finalString[i]) {
      case '<':
        finalString[i] = '&lt;';
        break;
      case '&':
        finalString[i] = '&amp;';
        break;
      case '>':
        finalString[i] = '&gt;';
        break;
      case '"':
        finalString[i] = '&quot;';
        break;
      case "'":
        finalString[i] = '&apos;';
        break;
    }
  }

  finalString = finalString.join('');
  console.log(finalString);
}

convertHTML("Dolce & Gabbana");

//TEST CASES

// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Shindler's List") should return Shindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.