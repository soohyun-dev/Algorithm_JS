/*
*요구사항

가중치가 담긴 트리가 주어진다.
어떤 두 노드를 잡고 경로를 이을 떄 가장 긴 경로의 가중치 합을 찾으시오.

* 해결전략

먼저 트리를 만든다.
이어서 최대 경로가 나오는 경우는 리프노드들끼리 이었을 때다.

*/

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
      if (distance[v[0]] === -1) {
        distance[v[0]] = weight + v[1];
        dfs(v[0], distance[v[0]]);
      }
    });
  };

  if (N === 1) return 0;
  const tree = Array.from({ length: N + 1 }, () => []);
  treeInfo.forEach((info) => {
    tree[info[0]].push([info[1], info[2]]);
    tree[info[1]].push([info[0], info[2]]);
  });
  let distance = Array.from({ length: N + 1 }).fill(-1);
  distance[1] = 0;
  dfs(1, 0);

  let maxIndex = -1;
  let maxDist = 0;
  distance.forEach((v, i) => {
    if (maxDist < v) {
      maxIndex = i;
      maxDist = v;
    }
  });

  distance = Array.from({ length: N + 1 }).fill(-1);
  distance[maxIndex] = 0;
  dfs(maxIndex, 0);

  const answer = Math.max(...distance);
  return answer;
}

console.log(solution(Number(input_N), input_treeInfo));
