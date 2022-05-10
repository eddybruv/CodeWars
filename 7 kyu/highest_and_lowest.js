/**
 * In this assignment, you are given a string of space separated numbers, and have to return the highest and lowest number
 * 
 * Example
 * highAndLow('1 2 3 4 5') returns "5 1"
 */

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example tests", () => {
  it("Test 1", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });
});


function highAndLow(numbers) {
  // ...
  numbers = numbers.split(" ");
  numbers = numbers.sort((a, b) => b - a);
  return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}