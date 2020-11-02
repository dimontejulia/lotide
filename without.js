/*
remove specified item(s) from an array
*/

const assertArraysEqual = require("./assertArraysEqual");

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
