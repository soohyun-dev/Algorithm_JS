const input = require('fs').readFileSync('././index.txt').toString().trim().split('\n');
const log = console.log;
const inputN = Number(input[0]);
const inputSnows = input[1].split(' ').map(Number);

/*
3 5 2 5 9

2 3 5 5 9

[
  [ 5, 0, 1 ],  [ 7, 0, 2 ], [ 7, 0, 3 ],  [ 11, 0, 4 ],

  [ 8, 1, 2 ],  [ 8, 1, 3 ], [ 12, 1, 4 ], 

  [ 10, 2, 3 ], [ 14, 2, 4 ], 

  [ 14, 3, 4 ]
]
*/

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
      if (new Set([...list[i].slice(1), ...list[i + 1].slice(1)].map(String)).size === 4) {
        answer = diff;
      }
    }
  }

  return answer;
}

log(solution(inputN, inputSnows));
