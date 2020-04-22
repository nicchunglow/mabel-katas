const sunsetCheck = require("./Sunset");

describe("SunsetBuilding", () => {
  it("should to tell which are the tallest buildings in the row, in the right order, that can see the sunset", () => {
    const tallestBuildings = sunsetCheck([1, 2, 9, 8]);
    expect(tallestBuildings).toMatchObject([9, 8]);
  });
  it("should have only 1 building appeared if its the same height", () => {
    const tallestBuildings = sunsetCheck([5, 5, 5, 5]);
    expect(tallestBuildings).toMatchObject([5]);
  });
});
