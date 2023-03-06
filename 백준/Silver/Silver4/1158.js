const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const log = console.log;

function solution(N, K) {
  let result = [];
  let cnt = 1;
  let deque = Array.from({ length: N }, (_, idx) => [idx + 1]);

  while (deque.length !== 0) {
    let target = deque.shift();
    if (cnt === K) {
      result.push(target[0]);
      cnt = 1;
    } else {
      deque.push(target);
      cnt += 1;
    }
  }

  return '<' + result.join(', ') + '>';
}

log(solution(...input.split(' ').map(Number)));

/*
1 2 3 4 5 6 7 8 9

3 6 9 4 8 5 2 7 1
*/
