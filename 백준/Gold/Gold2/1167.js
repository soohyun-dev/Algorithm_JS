const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_N = input.shift();
const [...input_treeInfo] = input.map((v) => v.split(" ").map(Number));

function solution(N, treeInfo) {
  const dfs = (node, weight) => {
    tree[node].forEach((v) => {
      if (dist[v[0]] === -1) {
        dist[v[0]] = weight + v[1];
        dfs(v[0], dist[v[0]]);
      }
    });
  };

  const tree = Array.from({ length: N + 1 }, () => []);
  treeInfo.forEach((info) => {
    const parent = info[0];
    for (let i = 1; i < +(info.length / 2); i++) {
      const child = info[2 * i - 1];
      const weight = info[2 * i];
      tree[parent].push([child, weight]);
      tree[child].push([parent, weight]);
    }
  });

  let dist = Array.from({ length: N + 1 }).fill(-1);
  dist[1] = 0;
  dfs(1, 0);

  let maxIdx = 0;
  let maxV = 0;
  dist.forEach((v, i) => {
    if (v > maxV) {
      maxV = v;
      maxIdx = i;
    }
  });

  dist = Array.from({ length: N + 1 }).fill(-1);
  dist[maxIdx] = 0;
  dfs(maxIdx, 0);

  const answer = Math.max(...dist);

  return answer;
}

console.log(solution(+input_N, input_treeInfo));
