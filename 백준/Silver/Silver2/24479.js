const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cnt = 1;
const BFS = (start) => {
  for (i of graph[start]) {
    if (!visited[i]) {
      cnt += 1;
      visited[i] = true;
      cntArr[i] = cnt;
      BFS(i);
    }
  }
  return;
};

const [X, Y, Z] = input[0].split(" ").map(Number);
const graph = [...new Array(X + 1)].map(() => []);
const visited = [...new Array(X + 1)].fill(false);
const cntArr = [...new Array(X + 1)].fill(Number(0));
visited[Z] = true;
cntArr[Z] = 1;

for (let i = 1; i < Y + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let j = 0; j < X; j++) {
  graph[j].sort((a, b) => a - b);
}

BFS(Z, 2);

for (let k = 1; k < X + 1; k++) {
  console.log(cntArr[k]);
}
