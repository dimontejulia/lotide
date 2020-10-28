const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (
    array1 === undefined ||
    array2 === undefined ||
    array1.length !== array2.length
  ) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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
      console.log("array found");
      return eqArrays(object1[elem], object2[elem]);
      // check if the value stored at the  key is the same in both objects
    } else if (object1[elem] !== object2[elem]) {
      return false;
    }
  }
  //objects are the same, return true
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== $${inspect(expected)}`
    );
  }
};

const users = {
  zbxN3: "Zofia Mcdougall",
  Ff3dc: "Anisha Franco",
  AaCf3: "Colin Lam",
  X63ef: "Ozan Robbins",
  RfErt: "Doug Velez",
};

const users2 = {
  zb3f3: "Julia Di Monte",
  Ff3dc: "Anisha Franco",
  AaCf3: "Colin Lam",
  X63ef: "Ozan Robbins",
  RfErt: "Doug Velez",
};
assertObjectsEqual(users, users);
assertObjectsEqual(users, users2);
