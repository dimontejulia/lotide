const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), [ 'Lighthouse', 'Labs' ]);
  });
  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

});
