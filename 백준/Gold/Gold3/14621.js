const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const log = console.log;

const inputNM = input[0].split(' ').map(Number);
input.shift();
const inputSchool = input[0].trim().split(' ');
input.shift();

function solution(N, M, school, edges) {
  const find = (x) => {
    if (x === parent[x]) return x;
    const y = find(parent[x]);
    parent[x] = y;
    return y;
  };

  const union = (x, y) => {
    const X = find(x);
    const Y = find(y);
    if (X !== Y) parent[Y] = X;
  };

  const parent = Array.from({ length: N + 1 }, (_, idx) => idx);
  const edgeInfo = edges.sort((a, b) => a[2] - b[2]);

  let result = 0;
  let depth = 0;
  let answer = 0;

  for (let [x, y, z] of edgeInfo) {
    if (find(x) !== find(y) && school[x - 1] !== school[y - 1]) {
      union(x, y);
      result += z;
      depth += 1;
    }
    if (depth === N - 1) {
      answer = result;
      break;
    }
  }

  return depth !== N - 1 ? -1 : answer;
}

log(
  solution(
    ...inputNM,
    inputSchool,
    input.map((v) => v.split(' ').map(Number))
  )
);
