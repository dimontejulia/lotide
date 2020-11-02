/*
Returns the key when provided with it's value
*/

const assertEqual = require("././assertEqual");

const findKeyByValue = function(myObj, lookupVal) {
  // generates a list of keys found myObj
  const listOfKeys = Object.keys(myObj);
  //loops through all of the keys and compares them to myObj
  for (let key of listOfKeys) {
    if (myObj[key] === lookupVal) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //fail
