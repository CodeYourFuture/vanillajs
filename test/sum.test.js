const { sum } = require("../src/sum.js");

describe("lastIndexOf()", () => {
  test("can sum a list of numbers", () => {
    expect(sum([10, 20, 30])).toBe(60);
  });
});
