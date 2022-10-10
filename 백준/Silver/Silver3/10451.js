const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
for (let i = 0; i < Number(T); i++) {
  const N = +input[i * 2];
  const Node = [0, ...input[i * 2 + 1].split(" ").map(Number)];
  function solution(N, Node) {
    let visited = Array.from({ length: N + 1 }, () => false);
    let result = 0;
    const DFS = (v) => {
      visited[v] = true;
      nextNode = Node[v];
      if (visited[nextNode] === false) DFS(nextNode);
    };
    for (let i = 1; i < N + 1; i++)
      if (visited[i] === false) {
        DFS(i);
        result += 1;
      }
    return result;
  }
  console.log(solution(N, Node));
}
