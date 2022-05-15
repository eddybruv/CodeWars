/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel string.
 * The first word within the output should be capitalized only if the original words was capitalized(upper camel case)
 */

// Example
// "the-stealth-warrior" gets converted to "theStealthWarrior"

function toCamelCase(str) {
  str = str.split(/-|_/);
  let rem = str.splice(1);
  rem = rem.map((word) =>
    word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  );
  str.push(...rem);
  return str.join("");
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      toCamelCase(""),
      "",
      "An empty string was provided but not returned"
    );
    Test.assertEquals(
      toCamelCase("the_stealth_warrior"),
      "theStealthWarrior",
      "toCamelCase('the_stealth_warrior') did not return correct value"
    );
    Test.assertEquals(
      toCamelCase("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "toCamelCase('The-Stealth-Warrior') did not return correct value"
    );
    Test.assertEquals(
      toCamelCase("A-B-C"),
      "ABC",
      "toCamelCase('A-B-C') did not return correct value"
    );
  });
});

// optimal solution
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
