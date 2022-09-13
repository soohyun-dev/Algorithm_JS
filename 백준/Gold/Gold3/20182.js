const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const dijkstra = (s, e, m) => {
  const dist = [...new Array(N + 1)].fill(Infinity);
  let q = [];
  dist[s] = 0;
  q.push([0, s, 0]);
  let answer = Infinity;
  while (q.length !== 0) {
    let [Z, X, M] = q.shift();
    if (dist[X] < Z) continue;
    for ([cost, next] of graph[X]) {
      cost += Z;
      if (dist[next] > cost && cost <= m) {
        dist[next] = cost;
        if (M < cost - Z) {
          M = cost - Z;
        }
        if (next === end) {
          if (answer > M) answer = M;
        }
        q.push([cost, next, M]);
      }
    }
  }
  return answer;
};

const [N, M, start, end, money] = input[0].split(" ").map(Number);
const graph = [...new Array(N + 1)].map(() => []);
for (let i = 1; i < M + 1; i++) {
  const [a, b, cost] = input[i].split(" ").map(Number);
  graph[a].push([cost, b]);
  graph[b].push([cost, a]);
}

let result = dijkstra(start, end, money);

console.log(result === Infinity ? -1 : result);
