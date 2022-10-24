const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, ...Nums] = input;
Nums.map((num) => Number(num));
function solution(n, nums) {
  let result = 0;
  let sum = nums.reduce((pre, cur) => pre + cur);
  for (let i = 0; i < n - 1; i++) {
    let v = nums[i];
    sum -= v;
    result += sum * v;
  }
  return result;
}
console.log(solution(N, Nums[0]));
