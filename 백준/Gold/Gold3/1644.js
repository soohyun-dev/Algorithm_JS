const input = require('fs').readFileSync('././index.txt').toString().trim();
const log = console.log;

function solution(num) {
  const isPrimeNmbers = Array.from({ length: num + 1 }, () => true).fill(false, 0, 2);
  const primeNumbers = [];
  let cnt = 0;

  for (let i = 2; i < num; i++) {
    for (let j = 2; j * i <= num; j++) {
      isPrimeNmbers[i * j] = false;
    }
  }

  isPrimeNmbers.forEach((isPrime, idx) => {
    if (isPrime) primeNumbers.push(idx);
  });

  for (let i = 0; i < primeNumbers.length; i++) {
    let tmp = 0;
    for (j = i; j < primeNumbers.length; j++) {
      tmp += primeNumbers[j];
      if (tmp === num) {
        cnt += 1;
        break;
      } else if (tmp > num) {
        break;
      }
    }
  }

  return cnt;
}

log(solution(+input));
