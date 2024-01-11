const { includes } = require("../src/includes.js");

describe("includes", () => {
  test("returns true when the element is in the array", () => {
    expect(includes([1, 2, 3, 4, 5], 3)).toBe(true);
  });

  test("returns false when the element is not in the array", () => {
    expect(includes([1, 2, 3, 4, 5], 6)).toBe(false);
  });

  test("works with an array of strings", () => {
    expect(includes(["apple", "banana", "orange"], "banana")).toBe(true);
  });

  test("returns false for an empty array", () => {
    expect(includes([], "anything")).toBe(false);
  });

  test("handles elements of different types", () => {
    expect(includes([1, "2", 3, "4", 5], "2")).toBe(true);
  });
});
