const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const inputN = +input.shift();
const inputBooks = input.map((v) => v.trim());
const log = console.log;

function solution(N, books) {
  const dict = {};
  const cnt = {};
  let MAX = 0;

  books.forEach((book) => {
    if (!dict[book]) dict[book] = 1;
    else dict[book] += 1;
  });

  Object.keys(dict).forEach((v) => {
    MAX = Math.max(MAX, dict[v]);
    if (!cnt[dict[v]]) cnt[dict[v]] = [v];
    else cnt[dict[v]].push(v);
  });

  return cnt[MAX].sort()[0];
}

log(solution(inputN, inputBooks));
