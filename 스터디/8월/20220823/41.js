const N = 8;

const eratos = (num) => {
  const check = [];
  for (let i = 0; i <= num; i++) {
    check.push(true);
  }
  check[0] = false;
  check[1] = false;
  for (let i = 2; num / 2 + 1 > i; i++) {
    if (check[i] == true) {
      for (let j = i + i; num + 1 > j; j += i) {
        check[j] = false;
      }
    }
  }
  return check[num];
};

console.log(eratos(N) ? "YES" : "NO");
