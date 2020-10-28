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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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
