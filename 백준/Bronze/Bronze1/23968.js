const { exit } = require("process");

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
  for (let i = N; i > 1; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
        cnt += 1;
        if (cnt === K) {
          console.log(nums[j], nums[j + 1]);
          exit(0);
        }
      }
    }
  }
  console.log(-1);
}

solution(input_N, input_K, input_nums);
