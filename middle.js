/*
returns the middle element of an array. If there are 2, return both
*/

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(arr) {
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

module.exports = middle;
