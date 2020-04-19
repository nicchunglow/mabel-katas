const multiplyArray = (array1,array2)=> {
  const numArr1 = array1.join("").toString()
  const numArr2 = array2.join("").toString()
  multipliedNum = numArr1*numArr2
  multipliedArr = multipliedNum.toString().split("")
  if(multipliedArr[0] === "-"){
    multipliedArr.shift()
    multipliedArr[0] = multipliedArr[0] * -1
  }
  arrWithNum = multipliedArr.map(digit => parseInt(digit))
  return arrWithNum
}

module.exports = multiplyArray