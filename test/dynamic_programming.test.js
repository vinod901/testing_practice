const bersu_ball = require("../src/dynamic_programming/bersu_ball");

test("testing bersu_ball function", () => {
  expect(bersu_ball([1, 4, 6, 2], [5, 1, 5, 7, 9])).toBe(3);
  expect(bersu_ball([1, 2, 3, 4], [10, 11, 12, 13])).toBe(0);
  expect(bersu_ball([1, 1, 1, 1, 1], [1, 2, 3])).toBe(2);
});
