const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let [center, MIN, Idx] = [parseInt(nums.length / 2), Infinity, 0];

for (let i = 1; i >= -1; i--) {
  let [tmp, s] = [0, nums[i + center]];
  for (let j of nums) tmp += Math.abs(s - j);
  if (MIN >= tmp) [MIN, Idx] = [tmp, i + center];
}
console.log(nums[Idx]);
