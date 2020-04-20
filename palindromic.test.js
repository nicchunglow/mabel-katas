const palindromic = require("./palindromic");

describe("palindromic", () => {
  it("should return 'It is Palindromic.' if string length is 1", () => {
    const checkedPalindromic = palindromic("1");
    expect(checkedPalindromic).toBe("It is Palindromic.");
  });
  it("should return 'It is Palindromic.' if even string is palindromic", () => {
    const checkedPalindromic = palindromic("abba");
    expect(checkedPalindromic).toBe("It is Palindromic.");
  });
  it("should return 'It is Palindromic.' if odd string is palindromic", () => {
    const checkedPalindromic = palindromic("abtba");
    expect(checkedPalindromic).toBe("It is Palindromic.");
  });
  it("should return 'It is Palindromic.' if string has caps", () => {
    const checkedPalindromic = palindromic("abtbA");
    expect(checkedPalindromic).toBe("It is Palindromic.");
  });
  it("should return 'It is Palindromic.' if string has spaces that are even in number", () => {
    const checkedPalindromic = palindromic("ab t bA");
    expect(checkedPalindromic).toBe("It is Palindromic.");
  });
  it("should return 'Not Palindromic.' if string is not palindromic", () => {
    const checkedPalindromic = palindromic("atba");
    expect(checkedPalindromic).toBe("Not Palindromic.");
  });
  it("should return 'Not Palindromic.' if string spaces are not palindromic", () => {
    const checkedPalindromic = palindromic("at  b a");
    expect(checkedPalindromic).toBe("Not Palindromic.");
  });
});
