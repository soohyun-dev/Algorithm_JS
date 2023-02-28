const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const log = console.log;
const inputN = Number(input[0]);
const inputSnows = input[1].split(' ').map(Number);

function solution(N, snows) {
  const snowList = snows.sort((a, b) => a - b);
  let list = [];
  let answer = Infinity;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      list.push([snowList[i] + snowList[j], i, j]);
    }
  }
  list = list.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < list.length - 1; i++) {
    const diff = Math.abs(list[i][0] - list[i + 1][0]);
    if (diff < answer) {
      if ([...new Set([...list[i].slice(1), ...list[i + 1].slice(1)].map(String))].length === 4) {
        answer = diff;
      }
    }
  }

  return answer;
}

log(solution(inputN, inputSnows));
