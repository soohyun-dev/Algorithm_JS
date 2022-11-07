const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_K] = input[0].split(" ").map(Number);
const [...input_nums] = input[1].split(" ").map(Number);

function solution(N, K, nums) {
  const dfs = (makeNum, idx) => {
    if (idx === String(N).length) {
      return;
    }

    for (let i = 0; i < K; i++) {
      makeNum.push(nums[i]);
      numStore.push(Number(makeNum.join("")));
      dfs(makeNum, idx + 1);
      makeNum.pop();
    }
  };

  let numStore = [];
  dfs([], 0);
  numStore = numStore.sort((a, b) => a - b);

  for (let i = 0; i < numStore.length; i++) {
    if (numStore[i] > N) {
      return numStore[i - 1];
    }
  }

  return numStore[numStore.length - 1];
}

console.log(solution(input_N, input_K, input_nums));
