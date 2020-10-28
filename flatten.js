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

const flatten = function (inputArr) {
  let outputArr = [];
  for (elem of inputArr) {
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
