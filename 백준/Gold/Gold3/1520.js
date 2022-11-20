/*
*** 요구사항 

높이(칸에 써진 숫자)가 낮은 위치로만 이동해서 
오른쪽 아래 지점까지 가는 경우의 수 카운트

*** 해결전략

1. DFS 로 모든 경우의 수들을 탐색해서 끝에 도착하는 경우를 체크 => (20% 시간초과)
2. 
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_M] = input[0].split(" ").map(Number);
input.shift();
const input_board = input.map((v) => v.split(" ").map(Number));

function solution(N, M, board) {
  const validate = (x, y) => {
    if (x === N - 1 && y === M - 1) return 1;
    if (board[x][y] <= board[N - 1][M - 1]) return 0;
    if (dp[x][y] !== -1) return dp[x][y];
    return "allow";
  };

  const dfs = (x, y) => {
    const result = validate(x, y);
    if (result !== "allow") return result;
    dp[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      const [mx, my] = [x + dr_x[i], y + dr_y[i]];
      if (mx < 0 || mx >= N || my < 0 || my >= M) continue;
      if (board[x][y] > board[mx][my]) dp[x][y] += dfs(mx, my);
    }
    return dp[x][y];
  };
  const dr_x = [-1, 0, 1, 0];
  const dr_y = [0, 1, 0, -1];
  const dp = Array.from(Array(N), () => Array(M).fill(-1));
  let cnt = dfs(0, 0);

  return cnt;
}

console.log(solution(input_N, input_M, input_board));
