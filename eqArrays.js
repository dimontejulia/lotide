const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2, expected) {
  for (arrElem1 of array1) {
    for (arrElem2 of array2) {
      if (arrElem1 !== arrElem2) {
        return assertEqual(true, expected);
      }
    }
  }
  return assertEqual(false, expected);
};

eqArrays([1, 2, 3], [1, 2, 3], true); // => true
eqArrays([1, 2, 3], [3, 2, 1], false); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"], true); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3], false); // => false
