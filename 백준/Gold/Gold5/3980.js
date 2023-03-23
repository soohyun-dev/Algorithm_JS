const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const inputN = +input.shift();
const inputTest = input.map((v) => v.trim().split(' ').map(Number));
const log = console.log;

function solution(N, test) {
  const bfs = (idx, value, dict, Case) => {
    if (Object.keys(dict).length === 11) {
      MAX = Math.max(value, MAX);
    }
    Case.forEach((line, j) => {
      if (line[idx + 1] > 0 && dict[j] === undefined) {
        const copyDict = JSON.parse(JSON.stringify(dict));
        copyDict[j] = true;
        bfs(idx + 1, value + line[idx + 1], copyDict, Case);
      }
    });
  };

  let MAX = 0;
  for (let i = 0; i < N; i++) {
    const Case = test.splice(0, 11);
    Case.forEach((line, i) => {
      if (line[0] > 0) {
        const dict = {};
        dict[i] = true;
        bfs(0, line[0], dict, Case);
      }
    });

    log(MAX);
    MAX = 0;
  }
}

solution(inputN, inputTest);
