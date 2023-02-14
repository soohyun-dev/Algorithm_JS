const input = require('fs').readFileSync('././index.txt').toString().trim();
const log = console.log;

function solution(N) {
  const dac = (s, m, target) => {
    if (target >= s + 1 && target <= s + m) {
      return target === s + 1 ? 'm' : 'o';
    }
    if (target < s) {
      return dac((s - (m - 1)) / 2, m - 1, target);
    }
    return dac((s - (m - 1)) / 2, m - 1, target - s - m);
  };

  let [side, middle, len] = [3, 3, 0];
  while (N > len) {
    side = len; // 순서 중요
    middle += 1;
    len = side * 2 + middle;
  }

  return dac(side, middle, N);
}

log(solution(Number(input)));

/**
 * S(0) = moo  1
 * S(1) = S(0) + mooo + S(0) 1 4 8 / 3 4
 * S(2) = S(1) + moooo + S(1) 1 4 8 11 16 19 23 / 3 4 3 5 3 4
 *   3 4 3 5 3 4 3 6 3 4 3 5 3 4
 * .
 * 3
 * 10
 * 25
 */

//  let moo = 'moo';
//  let total = 'moo';
//  while (total.length < N) {
//    moo += 'o';
//    total = total + moo + total;
//  }
//  return total[N - 1];
