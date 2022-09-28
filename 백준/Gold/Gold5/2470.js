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

let [MIN, left, right] = [Infinity, 0, T - 1];
let result = [0, 0];
while (left < right) {
  let [X, Y] = [nums[left], nums[right]];
  let hap = X + Y;
  if (MIN > Math.abs(hap)) [MIN, result] = [Math.abs(hap), [X, Y]];
  hap < 0 ? (left += 1) : (right -= 1);
}
console.log(result.join(" "));

// const check = (MIN, X, Y, i, j, n, m) => {
//   if (MIN > Math.abs(arr[n][i] + arr[m][j]))
//     [MIN, X, Y] = [Math.abs(arr[n][i] + arr[m][j]), arr[n][i], arr[m][j]];
//   return [MIN, X, Y];
// };

// const T = Number(input[0]);
// let nums = input[1].split(" ").map(Number);
// let arr = [[], []];
// for (let i = 0; i < T; i++) {
//   if (nums[i] < 0) arr[0].push(nums[i]);
//   else arr[1].push(nums[i]);
// }
// [arr[0], arr[1]] = [arr[0].sort((a, b) => a - b), arr[1].sort((a, b) => a - b)];

// if (arr[0].length === 0) console.log(arr[1][0], arr[1][1]);
// else if (arr[1].length === 0) console.log(arr[0][0], arr[0][1]);
// else {
//   let [MIN, X, Y] = [Infinity, 0, 0];
//   for (let i = 0; i < arr[0].length; i++) {
//     for (let j = 0; j < arr[1].length; j++) {
//       [MIN, X, Y] = check(MIN, X, Y, i, j, 0, 1);
//     }
//   }
//   if (arr[0].length === 1 && arr[1].length === 1)
//     [MIN, X, Y] = check(MIN, X, Y, 0, 1, 0, 0);
//   else if (arr[0].length === 1) [MIN, X, Y] = check(MIN, X, Y, 0, 1, 1, 1);
//   else if (arr[1].length === 1) [MIN, X, Y] = check(MIN, X, Y, 0, 1, 0, 0);
//   console.log(X, Y);
// }
