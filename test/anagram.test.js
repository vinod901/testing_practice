const anagram = require("../src/anagram");

test("Testing anagram function", () => {
  expect(anagram("heart", "earth")).toBeTruthy();
  expect(anagram("heart", "art")).toBeFalsy();
});
