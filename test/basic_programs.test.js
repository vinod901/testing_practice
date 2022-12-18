const box_blur = require("../src/basic_programs/box_blur");
const anagram = require("../src/basic_programs/anagram");
const kangaroo = require("../src/basic_programs/kangaroo");
const palindrome = require("../src/basic_programs/palindrome");
const is_prime = require("../src/basic_programs/prime");

test("testing a box_blur ", () => {
  const image = [
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ];
  const result = [[1]];
  const image2 = [
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0],
  ];
  const result2 = [
    [5, 4],
    [4, 4],
  ];
  expect(box_blur(image)).toEqual(result);
  expect(box_blur(image2)).toEqual(result2);
});

test("Testing anagram function", () => {
  expect(anagram("heart", "earth")).toBeTruthy();
  expect(anagram("heart", "art")).toBeFalsy();
});

test("Testing Kangaroo function", () => {
  expect(kangaroo(0, 3, 4, 2)).toBeTruthy();
  expect(kangaroo(0, 2, 5, 3)).toBeFalsy();
  expect(kangaroo(2, 1, 1, 2)).toBeFalsy();
});

test("testing palindrome function", () => {
  expect(palindrome("racecar")).toBeTruthy();
  expect(palindrome("hello")).toBeFalsy();
});

test("testing prime function", () => {
  expect(is_prime(5)).toBeTruthy();
  expect(is_prime(6)).toBeFalsy();
});
