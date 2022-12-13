const kangaroo = require("../src/kangaroo");

test("Testing Kangaroo function", () => {
  expect(kangaroo(0, 3, 4, 2)).toBeTruthy();
  expect(kangaroo(0, 2, 5, 3)).toBeFalsy();
  expect(kangaroo(2, 1, 1, 2)).toBeFalsy();
});
