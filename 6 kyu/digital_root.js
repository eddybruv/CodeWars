/**
 * Given `n` take the sum of the digits of `n`. If that value has more than one digit, 
 * continue reducing in this way until a single digit number is produced. The input will be a non-negative interger.
 */

// Examples
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

function digital_root(n) {
  // ...
  if (n < 0) return;

  let result = findSum(n);
  return result;
}

function findSum(n) {
  if (n < 10) return n;

  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);
  }

  return findSum(sum);
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(digital_root(16), 7);
    Test.assertEquals(digital_root(456), 6);
  });
});

// got help from Randy