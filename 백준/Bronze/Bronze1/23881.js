const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_M] = input[0].split(" ").map(Number);
input.shift();
const [...input_nums] = input[0].split(" ").map(Number);

function solution(N, M, nums) {
  let cnt = 0;
  for (let i = N - 1; i > 0; i--) {
    const target = nums[i];
    let MAX = 0;
    let place = i;
    for (let j = i - 1; j >= 0; j--) {
      if (MAX < nums[j]) {
        MAX = nums[j];
        place = j;
      }
    }
    if (target < MAX) {
      nums[i] = MAX;
      nums[place] = target;
      cnt += 1;
    }
    if (cnt === M) {
      console.log(target, MAX);
      break;
    }
  }
  if (cnt < M) console.log(-1);
}

solution(input_N, input_M, input_nums);
