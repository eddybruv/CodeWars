/**
 * Your task is to make a function that can take any non-negative interger as an argument and
 * return it with its digits in descending order.
 * Essentially, rearrange the diits to create the highest possible number
 */

const  { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(123), 321);
    assert.strictEqual(descendingOrder(1), 1);
    assert.strictEqual(descendingOrder(111), 111);
    assert.strictEqual(descendingOrder(15), 51);
    assert.strictEqual(descendingOrder(1021), 2110);
    assert.strictEqual(descendingOrder(123456789), 987654321);
  });
});

// solution
function descendingOrder(n) {
  n = String(n);
  n = n.split("");
  n = n.sort((a, b) => b - a);
  n = n.join("");
  n = Number(n);
  return n;
}