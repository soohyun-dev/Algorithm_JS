const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input_nums = input.map((v) => Number(v));

function solution(nums) {
  let sum = 0;
  let idx = 0;
  let check = false;
  for (let i = 0; i < 10; i++) {
    sum += nums[i];
    idx = i;
    if (100 - sum <= 0) {
      check = true;
      break;
    }
  }
  if (Math.abs(100 - sum) === Math.abs(100 - (sum - nums[idx])) || !check) return sum;
  if (Math.abs(100 - sum) < Math.abs(100 - (sum - nums[idx]))) return sum;
  return (sum -= nums[idx]);
}

console.log(solution(input_nums));
