const { exit } = require("process");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_NS, input_nums] = input.map((v) => v.split(" ").map(Number));

function solution(N, S, nums) {
  const len = Array.from({ length: N }).fill(0);
  let MIN = Infinity;
  nums.forEach((_, idx) => {
    let store = 0;
    let cnt = 0;
    for (let i = idx; i < N; i++) {
      store += nums[i];
      cnt += 1;
      if (store >= S) {
        len[idx] = cnt;
        if (MIN > cnt) MIN = cnt;
        break;
      }
    }
    if (idx === 0 && len[0] === 0) {
      console.log(0);
      exit(0);
    }
  });
  return MIN;
}

console.log(solution(input_NS[0], input_NS[1], input_nums));
