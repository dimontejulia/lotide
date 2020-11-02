/*
Returns the tail end of an array
*/

const tail = function(myArray) {
  if (!myArray || myArray.length === 0) {
    console.log('undef');
    return undefined;
  } else {
    return myArray.slice(1, myArray.length);
  }
  
};

module.exports = tail;
