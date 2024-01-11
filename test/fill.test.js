const { fill } = require("../src/fill.js"); // Assume the function is in a file named 'fill.js'

describe("fill", () => {
  test("mutates and fills the entire array when start and end are not provided", () => {
    const array = [1, 2, 3, 4];
    fill(array, "a");
    expect(array).toEqual(["a", "a", "a", "a"]);
  });

  test("mutates and fills part of the array when start and end are provided", () => {
    const array = [1, 2, 3, 4];
    fill(array, "a", 1, 3);
    expect(array).toEqual([1, "a", "a", 4]);
  });

  test("does not change the array if start is greater than array length", () => {
    const array = [1, 2, 3, 4];
    fill(array, "a", 5);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test("does not change the array if end is less than start", () => {
    const array = [1, 2, 3, 4];
    fill(array, "a", 2, 1);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test("handles array with different types", () => {
    const array = [1, "b", 3, "d"];
    fill(array, 2);
    expect(array).toEqual([2, 2, 2, 2]);
  });
});
