const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_K] = input[0].split(" ").map(Number);
input.shift();
const input_nums = input[0].split(" ").map(Number);

function solution(N, K, nums) {
  let cnt = 0;
  for (let i = 1; i < N; i++) {
    const target = nums[i];
    let location = i - 1;
    while (0 <= location && target < nums[location]) {
      const tmp = nums[location];
      nums[location + 1] = tmp;
      location -= 1;
      cnt += 1;
      if (cnt === K || cnt - 1 === K) {
        console.log(cnt === K ? tmp : nums[location]);
        return;
      }
    }
    if (location + 1 !== i) {
      nums[location + 1] = target;
      cnt += 1;
      if (cnt === K) {
        console.log(target);
        return;
      }
    }
  }
  console.log(-1);
}

solution(input_N, input_K, input_nums);
