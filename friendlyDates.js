// Friendly Date Ranges
// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

// The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

// Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

// Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range.

// If the range ends in the same month that it begins, do not display the ending year or month.


//Hints
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

//Input: An array of two dates arranged in YYYY-MM-DD
//Output: An array with two dates in "readable" month, day, year format (with ordinal dates)

//Convert the month to its word value, and then convert numbers to ordinal values


function friendlyDates(arr) {
//Add the final array variable
  var finalDate = [];
//Add the two arrays to the finalDate and split them by the "-"
  finalDate.push(arr[0].split("-"));
  finalDate.push(arr[1].split("-"));
  
//Create an object variable for the months
  var months = {January:"01", February: "02", March: "03", April:"04", May:"05", June:"06", July:"07", August:"08", September:"09", October:"10", November:"11", December:"12"};

//Use a for loop to go through each of the letters in the new object.
  for (var key in months){
  	if (months[key] === finalDate[0][1]){
  		finalDate[0][1] = key;
  	}
  	if (months[key] === finalDate[1][1]){
  		finalDate[1][1] = key;
  	}
    
  }

//Save the dates as integers
  var day1 = parseInt(finalDate[0][2]);
  var day2 = parseInt(finalDate[1][2]);
  
//Run a switch function to add the ordinal number value in the place of each cardinal value
  function ordinal (day){
		switch (day) {
		  case 1:
		  case 21:
		  case 31:
		    return day + 'st';
		  case 2:
		  case 22:
		    return day + 'nd';
		  case 3:
		  case 23:
		    return day + 'rd';
		  default:
		    return day + 'th';
		}
  }

  //Set the dates by calling the ordinal function for each array
  finalDate[0][2] = ordinal(day1);
  finalDate[1][2] = ordinal(day2);
   
  //Change the number for the year to the end of the array 
  finalDate[0].push(finalDate[0].shift());
  finalDate[1].push(finalDate[1].shift());
 

  console.log(finalDate);

}

friendlyDates(['2016-07-01', '2016-07-04']);

// TEST CASES

// friendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
// friendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
// friendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
// friendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
// friendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
// friendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
// friendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].