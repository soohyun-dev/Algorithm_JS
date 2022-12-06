const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_K] = input[0].split(" ").map(Number);
input.shift();
const [...input_nums] = input[0].split(" ").map(Number);

function solution(N, K, nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const position = {};
  nums.forEach((v, i) => {
    position[v] = i;
  });
  let cnt = 0;
  for (let j = N - 1; j >= 0; j--) {
    if (nums[j] !== sortedNums[j]) {
      const MIN = nums[j];
      const MAX = sortedNums[j];
      nums[j] = MAX;
      nums[position[MAX]] = MIN;
      position[MIN] = position[MAX];
      position[MAX] = j;
      cnt += 1;
      if (cnt === K) {
        console.log(nums.join(" "));
        break;
      }
    }
  }
  if (cnt < K) console.log(-1);
}

solution(input_N, input_K, input_nums);
