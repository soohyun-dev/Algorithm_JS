/*
*요구사항

N이 주어지고, N개의 간선이 주어진다.
q가 주어지고, q개의 질의가 주어진다.
질의는 t k 로 이루어져있으며, 
t가 1일경우 단절점인지, t가 2일경우 단절선인지를 묻는 질의다.
각 질의에 맞게 'yes' or 'no' 를 답하자.

*해결 전략

단절점과 단절선의 특징을 먼저 알자.
부모 노드가 없는 경우나 자식노드가 없는 경우 단절점이 아니다.
또한, 이 문제에서는 모든 간선이 단절선. 
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let tree = Array.from({ length: N + 1 }).fill(0);
for (let i = 1; i < N - 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  tree[a] += 1;
  tree[b] += 1;
}

const q = Number(input[N]);
for (let j = N + 1; j <= N + q; j++) {
  let [t, k] = input[j].split(" ");
  if (t === "1") console.log(tree[Number(k)] === 1 ? "no" : "yes");
  else if (t === "2") console.log("yes");
}
