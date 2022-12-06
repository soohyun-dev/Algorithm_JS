const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_K] = input[0].split(" ").map(Number);
input.shift();
const [...input_nums] = input[0].split(" ").map(Number);

function solution(N, K, nums) {
  let cnt = 0;
  for (let i = N - 1; i > 0; i--) {
    const target = nums[i];
    let MAX = 0;
    let place = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (MAX < nums[j]) {
        MAX = nums[j];
        place = j;
      }
    }
    if (target < MAX) {
      cnt += 1;
      nums[i] = MAX;
      nums[place] = target;
    }
    if (cnt === K) {
      console.log(nums.join(" "));
      break;
    }
  }
  if (cnt < K) console.log(-1);
}

solution(input_N, input_K, input_nums);
