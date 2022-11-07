const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_K, ...input_nums] = input.map(Number);

function solution(N, K, nums) {
  const dfs = (idx) => {
    if (idx === K) {
      if (!dict[makeStr.join("")]) {
        cnt += 1;
        dict[makeStr.join("")] = true;
      }
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        makeStr.push(nums[i]);
        visited[i] = true;
        dfs(idx + 1);
        visited[i] = false;
        makeStr.pop();
      }
    }
  };

  const dict = {};
  let visited = Array.from({ length: N }).fill(false);
  let makeStr = [];
  let cnt = 0;
  dfs(0);

  return cnt;
}

console.log(solution(input_N, input_K, input_nums));
