const { sum } = require("./sum.js");

describe("sum()", () => {
  test("can sum a list of numbers", () => {
    expect(sum([10, 20, 30])).toBe(60);
  });
});
