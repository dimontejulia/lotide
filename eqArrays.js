const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2, expected) {
  let equal = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equal = false;
    }
  }

  if (equal === false) {
    return assertEqual(false, expected);
  } else {
    return assertEqual(true, expected);
  }
};

eqArrays([1, 2, 3], [1, 2, 3], true); // => true
eqArrays([1, 2, 3], [3, 2, 1], true); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"], true); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3], true); // => false
