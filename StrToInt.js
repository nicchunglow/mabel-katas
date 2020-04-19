function strToInt(string) {
  if (typeof string === "number") {
    return string;
  } else {
    const convertString = string * 1;
    return convertString;
  }
}

module.exports = strToInt;