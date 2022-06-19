function secondLargest(arr) {
  let sorted = arr.sort((a, b) => a - b);
  //   console.log(sorted[sorted.length - 2]);
  return sorted[sorted.length - 2];
}
secondLargest([6, 3, 0, 30, 7]);
module.exports = secondLargest;
