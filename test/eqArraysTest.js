const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

//TEST CODE
assertEqual((eqArrays([1, 2, 3], [1, 2, 3]))); // => true
eqArrays([1, 2, 3], [3, 2, 1], true); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"], true); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3], true); // => false
