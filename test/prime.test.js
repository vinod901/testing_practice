const is_prime = require("../src/prime");

test("testing prime function", () => {
  expect(is_prime(5)).toBeTruthy();
  expect(is_prime(6)).toBeFalsy();
});
