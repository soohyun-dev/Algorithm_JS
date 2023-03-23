const input = require('fs')
  .readFileSync('././index.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim().split(' ').map(Number));
const log = console.log;

function solution(N, M, neuron) {
  const dfs = (idx, check) => {
    if (visited[idx] === 0) {
      visited[idx] = check;
      tree[idx].forEach((v) => {
        dfs(v, check);
      });
    }
    return;
  };

  const tree = Array.from({ length: N + 1 }, () => []);
  const visited = Array.from({ length: N + 1 }, () => 0);
  neuron.forEach((nodes) => {
    const [left, right] = [...nodes];
    tree[left].push(right);
    tree[right].push(left);
  });

  let check = 1;
  tree.forEach((nodes, idx) => {
    nodes.forEach((v) => {
      if (visited[v] === 0) {
        visited[idx] = check;
        dfs(v, check);
        check += 1;
      }
    });
  });

  let result = 0;
  visited.forEach((v) => {
    if (v === 0) result += 1;
  });

  log(visited, tree);
  return result + check - 3;
}

log(solution(...input[0], input.splice(1)));
