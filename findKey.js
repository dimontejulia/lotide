/*
takes in an object and a callback and scans the object and returns the first key for which the callback returns a truthy value.
 If no key is found, then it should return undefined.
*/

// const assertEqual = require("./assertEqual");

const findKey = function(myObj, callback) {
  //generates a list of keys
  const listOfKeys = Object.keys(myObj);
  //loops through all keys
  for (let key of listOfKeys) {
    //passes the value of every key to callback function
    //if callback function returns true, return the key
    if (callback(myObj[key])) {
      return key;
    }
  }
  //if none of the values pass, return undefined
  return undefined;
};

// const results1 = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); // => "noma"

// const results2 = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); // => "noma"

// assertEqual(results1, "noma"); // => true
// assertEqual(results1, "Ora"); // => false
// assertEqual(results2, "Ora"); // => false
