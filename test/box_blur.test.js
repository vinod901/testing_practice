const box_blur = require("../src/box_blur");

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
