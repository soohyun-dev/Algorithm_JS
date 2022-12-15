const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [input_NM, ...input_TC] = input.map((v) => v.split(' ').map(Number));

function solution(N, M, TC) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const rank = Array.from({ length: N + 1 }, () => 0);

  TC.forEach((v) => {
    for (let i = 1; i < v.length - 1; i++) {
      graph[v[i]].push(v[i + 1]);
      rank[v[i + 1]] += 1;
    }
  });
  const result = [];
  let deque = [];

  for (let i = 1; i <= N; i++) {
    if (!rank[i]) deque.push(i);
  }

  while (deque.length !== 0) {
    const num = deque[0];
    result.push(num);
    deque.shift();
    for (let i of graph[num]) {
      rank[i] -= 1;
      if (!rank[i]) {
        deque.push(i);
      }
    }
  }

  if (result.length !== N) console.log(0);
  else {
    result.forEach((num) => console.log(num));
  }
}

solution(input_NM[0], input_NM[1], input_TC);
