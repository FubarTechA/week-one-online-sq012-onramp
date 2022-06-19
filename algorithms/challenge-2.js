function filterArray(arr) {
  let numArr = arr.filter((a) => Number.isInteger(a));
  //   console.log(numArr);
  return numArr;
}
filterArray([1, 2, "a", "b"]);
module.exports = filterArray;
