//Map the Stars!

//Return a new array that transforms the element's average altitude into their orbital periods.

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

//You can read about orbital periods on wikipedia. https://en.wikipedia.org/wiki/Orbital_period

//The values should be rounded to the nearest whole number. The body being orbited is Earth.

//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

//Helpful Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

//Input: An object with two key/value pairs, name and avgAlt
//Output: An object with two key/value pairs, name and orbital period


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
//Store the first part of the formula as a global variable
  var a = 2 * Math.PI;
//Create a new array to store the final array
  var newArr = [];
//Create a function to be called for all the objects that get passed as an argument
  var getOrbPeriod = function(obj) {
//Calculate the formula's answer for each object
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
//Delete the kay/value pair for the avgAlt
    delete obj.avgAlt;
//Set the new key/value pair for the orbital period
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

//Loop through the keys in the arr argument and push to the final array with the function getOrbPeriod
  for (var key in arr) {
    newArr.push(getOrbPeriod(arr[key]));
  }

  console.log(newArr);
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//TEST CASES

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
//orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].