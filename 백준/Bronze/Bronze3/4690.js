let a = 6;

const calTriple = (num) => {
  let store = [];
  let Z = num ** 3;
  for (let i = 2; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      for (let k = j + 1; k < num; k++) {
        if (i ** 3 + j ** 3 + k ** 3 === Z) {
          store.push([i, j, k]);
        }
      }
    }
  }
  return store;
};

while (true) {
  let result = calTriple(a);
  for (let i = 0; i < result.length; i++) {
    console.log(
      "Cube = " +
        a +
        (", Triple = (" +
          result[i][0] +
          "," +
          result[i][1] +
          "," +
          result[i][2] +
          ")")
    );
  }
  a += 1;
  if (a > 100) {
    break;
  }
}
