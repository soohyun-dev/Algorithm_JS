const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, M] = input.shift();
const MAP = input;

function solution(N, M, MAP) {
  let chicken = [];
  let house = [];
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++) {
      if (MAP[i][j] === 2) {
        chicken.push([i, j]);
        MAP[i][j] = 0;
      } else if (MAP[i][j] === 1) house.push([i, j]);
    }
  const getDist = (arr, [x, y]) => {
    let MIN = Infinity;
    arr.map((v) => {
      let [CX, CY] = chicken[v];
      MIN = Math.min(MIN, Math.abs(CX - x) + Math.abs(CY - y));
    });
    return MIN;
  };

  let answer = Infinity;
  let combination = new Array(chicken.length).fill(false);
  const check = (idx, cnt) => {
    if (cnt === M) {
      let [result, total] = [[], []];
      for (let i = 0; i < chicken.length; i++)
        if (combination[i] === true) result.push(i);
      house.map((v) => (total += getDist(result, v)));
      answer = Math.min(answer, total);
      return;
    }
    for (let i = idx; i < chicken.length; i++) {
      if (combination[i] === true) continue;
      combination[i] = true;
      check(i, cnt + 1);
      combination[i] = false;
    }
  };

  check(0, 0);
  return answer;
}

console.log(solution(N, M, MAP));
