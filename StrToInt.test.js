const strToInt = require("./StrToInt");

describe("strToInt", () => {
  it("should return integer when string is already an integer", () => {
    const alreadyInt = strToInt(123);
    expect(alreadyInt).toBe(123);
  });
});
