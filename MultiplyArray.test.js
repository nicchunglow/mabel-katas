const multiplyArray = require("./MultiplyArray")

describe("multiplyArrays", () => {
  it("should return an array of the array inputs", () => {
    const mutipliedArray = multiplyArray([1,2,3],[1,2,3])
    expect(mutipliedArray).toMatchObject([1,5,1,2,9]);
  });
  it("should return a mutipliedArry with Negative num", () => {
    const mutipliedArray = multiplyArray([1,2,3],[-1,2,3])
    expect(mutipliedArray).toMatchObject([-1,5,1,2,9]);
  });
});
