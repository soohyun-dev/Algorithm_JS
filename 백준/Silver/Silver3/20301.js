const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [N, K, M] = input.split(" ").map(Number);

let arr = [...new Array(N)].map((v, i) => i + 1);

let idx = 0;

for (let i = 0; i < N; i++) {
  if (parseInt(idx / M) % 2 === 0) {
    for (let j = 0; j < K - 1; j++) {
      let tmp = arr[0];
      arr = [...arr.splice(1), tmp];
    }
  } else {
    for (let j = 0; j < K; j++) {
      let tmp = arr.pop();
      arr = [tmp, ...arr];
    }
  }
  idx += 1;
  console.log(arr[0]);
  arr = arr.splice(1);
}
