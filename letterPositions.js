/*
returns an object with the indexes where each letter shows up in a string
*/
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const results = {};
  let index = 0;
  for (letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index++;
  }
  console.log(results);

  return results;
};

const helloIndex = { h: [0], e: [1], l: [2, 3], o: [4] };
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
