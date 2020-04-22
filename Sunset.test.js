const sunsetCheck = require("./Sunset");

describe("SunsetBuilding", () => {
  it("should to tell which are the tallest buildings in the row that can see the sunset", () => {
    const tallestBuildings = sunsetCheck([1, 2, 9, 8]);
    expect(tallestBuildings).toMatchObject([9,8]);
  });
  it("should to tell which are the tallest buildings in the row that can see the sunset", () => {
    const tallestBuildings = sunsetCheck([1, 2, 9, 8]);
    expect(tallestBuildings).toMatchObject([9,8]);
  });
  });
