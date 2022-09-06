const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dijkstra = (start) => {
  for (let [next, cost] of graph[start]) {
    if (dist[next] > dist[start] + cost) {
      dist[next] = dist[start] + cost;
    }
  }
  return;
};

const [N, D] = input.shift().split(" ").map(Number);
const graph = [...new Array(D + 1)].map(() => []);
const dist = [...new Array(D + 1)].fill(Infinity);

for (let i = 0; i < N; i++) {
  const [start, end, len] = input.shift().split(" ").map(Number);
  if (end > D) continue;
  if (end - start > len) {
    graph[start].push([end, len]);
  }
}

let tmp = -1;
for (let j = 0; j < D + 1; j++) {
  if (j > 0) tmp = dist[j - 1];
  dist[j] = Math.min(dist[j], tmp + 1);
  if (graph[j].length > 0) dijkstra(j);
}

console.log(dist[D]);
