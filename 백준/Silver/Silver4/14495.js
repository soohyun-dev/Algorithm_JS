const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const fibonacci = (num) => {
  const arr = [...new Array(117)].fill(1);
  if (num > 4) {
    for (let i = 4; i < num + 1; i++) {
      arr[i] = arr[i - 3] + arr[i - 1];
    }
  }
  return arr[num];
};

const N = Number(input);

console.log(fibonacci(N));
