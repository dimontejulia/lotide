/*
returns the middle element of an array. If there are 2, return both
*/

const assertArraysEqual = require("./assertArraysEqual");

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function (arr) {
  const len = arr.length;
  let outputArr = [];
  const mid = Math.floor(len / 2);
  console.log(arr[mid]);
  if (len <= 2) {
    return outputArr;
  } else if (len % 2 === 1) {
    console.log(mid);
    outputArr.push(arr[mid]);
    return outputArr;
  } else if (len % 2 === 0) {
    outputArr.push(arr[mid - 1], arr[mid]);
    return outputArr;
  }
};

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
