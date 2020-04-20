const palindromic = (string) => {
  if (string.length === 1) {
    return "It is Palindromic.";
  }
  const dividingStr = Math.floor(string.length / 2);

  const reverseStr = string.split("").reverse().join("");
  for (let index = 0; index <= dividingStr; index++) {
    if (string[index].toLowerCase() !== reverseStr[index].toLowerCase()) {
      return "Not Palindromic.";
    }
    continue;
  }
  return "It is Palindromic.";
};

module.exports = palindromic;
