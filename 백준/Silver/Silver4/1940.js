const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((v) => v.trim());
const log = console.log;

function solution(N, M, nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let [front, back] = [0, N - 1];
  let cnt = 0;

  while (front < back) {
    if (sortedNums[front] + sortedNums[back] === M) {
      cnt++;
      front++;
      back--;
    } else if (sortedNums[front] + sortedNums[back] < M) {
      front++;
    } else {
      back--;
    }
  }

  return cnt;
}

log(
  solution(
    +input[0],
    +input[1],
    input[2].split(' ').map((v) => +v)
  )
);
