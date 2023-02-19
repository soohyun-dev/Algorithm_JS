const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(n, nums) {
  let result = 0;
  let sum = nums.reduce((pre, cur) => pre + cur);
  nums.forEach((num) => {
    sum -= num;
    result += sum * num;
  });
  return result;
}
console.log(solution(input[0], input[1]));

// 1 2 3 4 5
