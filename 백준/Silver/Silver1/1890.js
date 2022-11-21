const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_N = Number(input[0]);
input.shift();
const input_board = input.map((v) => v.trim().split(" ").map(Number));

function solution(N, board) {
  const move = (location, dist, check) => {
    return check === 0
      ? [location[0] + dist, location[1]]
      : [location[0], location[1] + dist];
  };

  const validate = (x, y) => {
    if (x === N - 1 && y === N - 1) return 1;
    if (dp[x][y] !== BigInt(-1)) return dp[x][y];

    return "allow";
  };

  const dfs = (x, y) => {
    const check = validate(x, y);
    if (check !== "allow") return BigInt(check);
    dp[x][y] = BigInt(0);
    for (let i = 0; i < 2; i++) {
      const [mx, my] = move([x, y], board[x][y], i);
      if (mx < 0 || mx >= N || my < 0 || my >= N) continue;
      dp[x][y] += dfs(mx, my);
    }

    return dp[x][y];
  };

  const dp = Array.from(Array(N), () => Array(N).fill(BigInt(-1)));
  const answer = dfs(0, 0);
  console.log(dp);

  return answer.toString();
}

console.log(solution(input_N, input_board));
