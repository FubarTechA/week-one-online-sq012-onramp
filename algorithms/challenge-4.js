function sumTwoSmallestNums(arr) {
  let posArr = arr.filter((a) => a > 0).sort((a, b) => a - b);
  //   console.log(posArr[0] + posArr[1]);
  return posArr[0] + posArr[1];
}
sumTwoSmallestNums([19, 5, 42, 2, 77]);
module.exports = sumTwoSmallestNums;
