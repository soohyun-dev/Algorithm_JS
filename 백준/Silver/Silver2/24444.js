const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const BFS = (start) => {
  const visited = [...new Array(N + 1)].fill(false);
  const check = [...new Array(N + 1)].fill(0);
  visited[start] = true;
  check[start] = 1;
  let q = [];
  q.push([start]);
  let cnt = 2;
  while (q.length !== 0) {
    let [X] = q[0];
    q = q.slice(1);
    for (let i of graph[X]) {
      if (!visited[i]) {
        visited[i] = true;
        check[i] = cnt;
        q.push([i, cnt]);
        cnt += 1;
      }
    }
  }
  return check;
};

const [N, M, R] = input[0].split(" ").map(Number);
const graph = [...new Array(N + 1)].map(() => []);
for (let i = 1; i < M + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let j = 1; j < N + 1; j++) {
  graph[j].sort((a, b) => a - b);
}

const result = BFS(R);

for (let i = 1; i <= N; i++) {
  console.log(result[i]);
}
