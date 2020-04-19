const addOnetoArray = require("./AddOne.js");

describe("addOne", () => {
  it("should return a 0 when the last number becomes 10", () => {
    const addedOne = addOnetoArray([1, 2, 9]);
    expect(addedOne).toMatchObject([1, 3, 0]);
  });
  it("should return a 0 when the last number becomes 9", () => {
    const addedOne = addOnetoArray([1, 2, 8]);
    expect(addedOne).toMatchObject([1, 2, 9]);
  });
  it("should add additional index to array all number is divisble by 10", () => {
    const addedOne = addOnetoArray([9, 9, 9]);
    expect(addedOne).toMatchObject([1, 0, 0, 0]);
  });
});
