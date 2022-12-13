const palindrome = require("../src/palindrome");

test("testing palindrome function", () => {
  expect(palindrome("racecar")).toBeTruthy();
  expect(palindrome("hello")).toBeFalsy();
});
