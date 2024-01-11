const { concat } = require("../src/concat.js"); // Assume the function is in a file named 'concat.js'

describe("concat", () => {
  test("concatenates two arrays", () => {
    expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("concatenates an empty array with a non-empty array", () => {
    expect(concat([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("concatenates a non-empty array with an empty array", () => {
    expect(concat([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("concatenates two empty arrays", () => {
    expect(concat([], [])).toEqual([]);
  });

  test("does not alter the original arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    concat(array1, array2);
    expect(array1).toEqual([1, 2, 3]);
    expect(array2).toEqual([4, 5, 6]);
  });
});
