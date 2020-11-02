/*
Our map function will take in two arguments:
1. An array to map
2. A callback function
The map function will return a new array based on the results of the callback function.
*/

const words = ["ground", "control", "to", "major", "tom"];
const empty = [];
const assertArraysEqual = require("./assertArraysEqual");

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
const results2 = map(empty, (word) => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // => true
assertArraysEqual(results1, ["bad", "c", "t", "m", "t"]); // => false
assertArraysEqual(results2, []); // => true
