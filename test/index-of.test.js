const { indexOf } = require("../src/index-of.js"); // Assume the function is in a file named 'indexOf.js'

describe("indexOf", () => {
  test("finds the first index of an element in an array", () => {
    expect(indexOf([1, 2, 3, 2, 1], 2)).toBe(1);
  });

  test("returns -1 if the element is not in the array", () => {
    expect(indexOf([1, 2, 3], 4)).toBe(-1);
  });

  test("works with an array of strings", () => {
    expect(indexOf(["apple", "banana", "apple"], "apple")).toBe(0);
  });

  test("returns -1 for an empty array", () => {
    expect(indexOf([], 1)).toBe(-1);
  });

  test("handles multiple occurrences of the element", () => {
    expect(indexOf([1, 2, 2, 2, 3], 2)).toBe(1);
  });
});
