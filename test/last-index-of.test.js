const { lastIndexOf } = require("../src/last-index-of.js"); // Assume the function is in a file named 'lastIndexOf.js'

describe("lastIndexOf", () => {
  test("finds the last index of an element in an array", () => {
    expect(lastIndexOf([1, 2, 3, 2, 1], 2)).toBe(3);
  });

  test("returns -1 if the element is not in the array", () => {
    expect(lastIndexOf([1, 2, 3], 4)).toBe(-1);
  });

  test("works with an array of strings", () => {
    expect(lastIndexOf(["apple", "banana", "apple"], "apple")).toBe(2);
  });

  test("returns -1 for an empty array", () => {
    expect(lastIndexOf([], 1)).toBe(-1);
  });

  test("handles multiple occurrences of the element", () => {
    expect(lastIndexOf([1, 2, 2, 2, 3], 2)).toBe(3);
  });
});
