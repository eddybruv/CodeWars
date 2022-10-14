// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function () {
  //your code here
  return this.split(" ")
    .map((word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join("");
};

describe("Basic tests", () => {
  Test.assertEquals("test case".camelCase(), "TestCase");
  Test.assertEquals("camel case method".camelCase(), "CamelCaseMethod");
  Test.assertEquals("say hello ".camelCase(), "SayHello");
  Test.assertEquals(" camel case word".camelCase(), "CamelCaseWord");
  Test.assertEquals("".camelCase(), "");
});
