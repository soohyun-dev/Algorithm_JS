const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_M] = input[0].split(" ").map(Number);
input.shift();
const [...input_chickens] = input.map((v) => v.trim().split(" ").map(Number));

function solution(N, M, chickens) {
  const dfs = (idx) => {
    if (idx === 3) {
      let total = 0;
      for (let i = 0; i < N; i++) {
        total += Math.max(
          chickens[i][store[0]],
          chickens[i][store[1]],
          chickens[i][store[2]]
        );
      }
      if (MAX < total) MAX = total;
      return;
    }

    for (let i = 0; i < M; i++) {
      if (!visited[i]) {
        store.push(i);
        visited[i] = true;
        dfs(idx + 1);
        visited = false;
        store.pop();
      }
    }
  };
  let visited = Array.from({ length: N }).fill(false);
  let MAX = 0;
  let store = [];
  dfs(0);

  return MAX;
}

console.log(solution(input_N, input_M, input_chickens));
