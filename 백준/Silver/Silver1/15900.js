const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_N = input.shift();
const [...input_treeInfo] = input.map((v) => v.split(" ").map(Number));

function solution(N, treeInfo) {
  const dfs = (node) => {
    visited[node] = true;
    for (let nextNode of tree[node]) {
      if (!visited[nextNode]) {
        dist[nextNode] = dist[node] + 1;
        dfs(nextNode);
      }
    }
  };

  const tree = Array.from({ length: N + 1 }, () => []);
  const visited = Array.from({ length: N + 1 }, () => false);
  const dist = Array.from({ length: N + 1 }, () => 0);
  let cnt = 0;
  treeInfo.forEach((info) => {
    tree[info[0]].push(info[1]);
    tree[info[1]].push(info[0]);
  });
  dfs(1);

  for (let i = 2; i <= N; i++) if (tree[i].length === 1) cnt += dist[i];

  return cnt % 2 === 0 ? "No" : "Yes";
}

console.log(solution(+input_N, input_treeInfo));
