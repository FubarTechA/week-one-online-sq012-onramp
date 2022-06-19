function filterList(arr) {
  //   console.log(arr.filter((a) => Number.isInteger(a)));
  return arr.filter((a) => Number.isInteger(a));
}
filterList([1, "a", "b", 0, 15]);
module.exports = filterList;
