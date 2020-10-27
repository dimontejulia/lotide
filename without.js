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

const without = function (itemsArray, repeatedItems) {
  // .filter() removes item that do not fit the criteria
  // criteria set as elements that are not included in the repeatedItems array
  const newItems = itemsArray.filter((item) => !repeatedItems.includes(item));
  console.log(newItems);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// without(["1", "2", "3"], []); // => ["1", "2", "3"]
// without([], [1]); // => []
// without(["hello", "world", "lighthouse"], ["lighthouse"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
