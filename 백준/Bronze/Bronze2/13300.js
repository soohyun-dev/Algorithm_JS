const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift().split(" ");
const check = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const travel = input.map((value) => {
  let [sex, grade] = value.split(" ");
  check[Number(sex)][Number(grade)] += 1;
});

let cnt = 0;
for (let i = 0; i < 2; i++) {
  for (let j = 1; j <= 6; j++) {
    let v = parseInt(check[i][j] / T[1]);
    let l = check[i][j] % T[1];
    cnt += v;
    if (l > 0) {
      cnt += 1;
    }
  }
}
console.log(cnt);
