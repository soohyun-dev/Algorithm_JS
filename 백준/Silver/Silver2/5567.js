const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function bfs(start, cnt) {
  let q = [];
  q.push([start, cnt]);
  while (q.length !== 0) {
    let [X, Y] = q.shift();
    for (let i of graph[X]) {
      if (visited[i] === false && Y < 2) {
        visited[i] = true;
        q.push([i, Y + 1]);
        result += 1;
      }
    }
  }
  return;
}

const T = +input.shift();
const m = +input.shift();
const graph = [...new Array(T + 1)].map(() => []);
const visited = [...new Array(T + 1)].fill(false);
visited[0] = true;
visited[1] = true;
let result = 0;

for (let i = 0; i < m; i++) {
  let [a, b] = input.shift().split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

bfs(1, 0);

console.log(result);
