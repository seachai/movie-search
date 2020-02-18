const isSelected = require("../isSelected");

describe("isSelected", () => {
  it("has a module", () => {
    expect(isSelected).toBeDefined();
    const expected = "function";
    const actual = typeof isSelected;
    expect(expected).toEqual(actual);
  });
});
