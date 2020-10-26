const assertEqual = function(actual, expected) {
  console.assert(actual !== expected, `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  console.assert(actual === expected, `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(myArray) {
  return (myArray[0]);
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), undefined);