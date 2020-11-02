# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @dimontejulia/lotide`

**Require it:**

`const _ = require('@dimontejulia/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: Prints if two arrays are equal
- `assertEqual`: Prints if two values are equal
- `assertObjectsEqual`: Prints if 2 objects are equal
- `countLetters`: Returns an object with the count of each letter.
- `countOnly`: Count how many times a value appears in an object
- `eqArrays`: Validates if two arrays are equal
- `eqObjects`: Validates if two objects are equal
- `findKey`: takes in an object and a callback and scans the object and returns the first key for which the callback returns a truthy value.
- `findKeyByValue`: Returns the key when provided with it's value
- `flatten`: Given an array or an array of arrays, returns all extracted values in 1 array
- `head`: returns the head (first element) of an array
- `index`: requires all necessary functions and loads them into an object
- `letterPositions`: returns an object with the indexes where each letter shows up in a string
- `map`: The map function will return a new array based on the results of the callback function.
- `middle`: returns the middle element of an array. If there are 2, return both

Testing:

- test files that implement Mocha & Chai to run tests on the above mentioned functions.
