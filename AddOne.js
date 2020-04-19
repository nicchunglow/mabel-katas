const addOnetoArray = (array) => {
  let newArr = array.reverse();
  newArr[0] += 1;
  for (let index = 0; index < newArr.length; index++) {
    if (newArr[index] % 10 === 0 && typeof newArr[index] === "number") {
      newArr[index + 1] += 1;
      newArr[index] = 0;
    }
  }
  newArr[newArr.length - 1] = 1;
  return newArr.reverse();
};

module.exports = addOnetoArray;
