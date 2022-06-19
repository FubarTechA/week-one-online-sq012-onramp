function sumMix(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  //   console.log(sum);
  return sum;
}
sumMix([9, 3, "7", "3"]);
module.exports = sumMix;
