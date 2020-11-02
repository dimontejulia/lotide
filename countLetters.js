/*
Returns an object with the count of each letter.
*/

// const assertEqual = require("./assertEqual");

const countLetters = function(sentence) {
  const letterCount = {};

  for (let letter of sentence) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

//TEST CODE
// const countLighthouse = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// };

// const result = countLetters("lighthouse in the house");
// assertEqual(result.h, 4);
