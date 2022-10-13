/**
 * The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 *
 *
 * What if the string is empty? Then the result should be empty object literal, {}.
 */

function count(string) {
  // The function code should be here
  if (string === "") return {};

  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (result.hasOwnProperty(string[i])) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  return result;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("should pass sample tests", () => {
    assert.deepEqual(count("aba"), { a: 2, b: 1 });
    assert.deepEqual(count("racecar"), { r: 2, a: 2, c: 2, e: 1 });
    assert.deepEqual(count(""), {});
  });
});
