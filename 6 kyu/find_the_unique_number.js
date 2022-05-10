/**
 * There's an array with some numbers. All numbers are equal except for one. 
 * Try to find it! 
 */

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
  it("Tests", () => {
    assert.strictEqual(findUniq([1, 0, 0]), 1);
    assert.strictEqual(findUniq([0, 1, 0]), 1);
    assert.strictEqual(findUniq([0, 0, 1]), 1);
    assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
  });
});


function findUniq(arr) {
  // do magic
  arr = arr.sort((a, b) => b - a);
  if (arr[0] === arr[1]) return arr[arr.length - 1];
  else return arr[0];
}
