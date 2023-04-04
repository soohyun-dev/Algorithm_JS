const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const log = console.log;

function solution(N) {
  const transform = (number, cnt) => {
    let tmp = cnt;
    number.split('').forEach((num) => {
      if (+num % 2 !== 0) tmp += 1;
    });
    if (number.length === 1) {
      MIN = Math.min(tmp, MIN);
      MAX = Math.max(tmp, MAX);
      return;
    } else if (number.length === 2) {
      transform(String(Number(number[0]) + Number(number[1])), tmp);
    } else {
      for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
          for (let k = j + 1; k < number.length; k++) {
            const front = +number.slice(0, j);
            const middle = +number.slice(j, k);
            const back = +number.slice(k);
            transform(String(front + middle + back), tmp);
          }
        }
      }
    }
  };

  let [MIN, MAX] = [Infinity, -Infinity];
  transform(N, 0);
  log(MIN, MAX);

  return;
}

solution(input);

/*
 number.slice(i, j).length === 1
                ? +number.slice(i, j)
                : number
                    .slice(i, j)
                    .split('')
                    .reduce((a, b) => Number(a) + Number(b), 0);
*/
