/*
Validates if two objects are equal
*/

const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (
    object1 === undefined ||
    object2 === undefined ||
    obj1Keys.length !== obj2Keys.length
  ) {
    return false;
  }
  //loop through all the keys in object 1
  for (elem in object1) {
    // check if value is an array to compare using the eqArrays function
    if (Array.isArray(object1[elem])) {
      return eqArrays(object1[elem], object2[elem]);
      // check if the value stored at the  key is the same in both objects
    } else if (object1[elem] !== object2[elem]) {
      return false;
    }
  }
  //objects are the same, return true
  return true;
};

module.exports = eqObjects;
