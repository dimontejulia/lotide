/*
Given an array or an array of arrays, returns all extracted values in 1 array
*/

// const eqArrays = "./eqArrays";
// const assertArraysEqual = "./assertArraysEqual";

const flatten = function(inputArr) {
  let outputArr = [];
  for (let elem of inputArr) {
    if (Array.isArray(elem)) {
      for (let i = 0; i < elem.length; i++) {
        outputArr.push(elem[i]);
      }
    } else {
      outputArr.push(elem);
    }
  }
  return outputArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [], 5, [6, 7, 8]]));
console.log(flatten([1, 2, 3, 4]));
