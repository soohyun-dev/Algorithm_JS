let ex = [
  [20, "aa"],
  [20, "bb"],
  [20, "cc"],
  [1, "v"],
  [5, "c"],
];

console.log("aa" < "bb");
console.log(
  ex.sort((a, b) => {
    if (a[0] - b[0] === 0) {
      if (a[1] < b[1]) return 1;
      return -1;
    }
    return a[0] - b[0];
  })
);
