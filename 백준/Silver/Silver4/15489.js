const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const log = console.log;

function solution(R, C, W) {
  const pascal = Array.from({ length: R + W - 1 }, () => [1]).fill([1, 1], 1, 2);
  let [result, cnt] = [0, 1];

  const validRange = (now) => now >= R - 1 && now < R + W - 1;

  pascal.forEach((_, idx) => {
    if (idx > 1) {
      pascal[idx - 1].forEach((num, len) => {
        pascal[idx].push(len < pascal[idx - 1].length - 1 ? num + pascal[idx - 1][len + 1] : 1);
      });
    }
    result += validRange(idx) ? pascal[idx].slice(C - 1, C + cnt - 1).reduce((pre, cur) => pre + cur) : 0;
    cnt += validRange(idx) ? 1 : 0;
  });

  return result;
}

log(solution(...input));
