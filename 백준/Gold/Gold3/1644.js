const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(num) {
  const isPrimeNmbers = Array.from({ length: num + 1 }, () => true).fill(false, 0, 2);

  let cnt = 0;

  for (let i = 2; i < num; i++) {
    for (let j = 2; j * i <= num; j += 1) {
      isPrimeNmbers[i * j] = false;
    }
  }

  const primeNumbers = [];
  for (let i = 2; i <= num; i++) {
    if (isPrimeNmbers[i]) {
      primeNumbers.push(i);
    }
  }

  for (let i = 0; i < primeNumbers.length; i++) {
    let total = 0;
    for (let j = i; j < primeNumbers.length; j++) {
      total += primeNumbers[j];
      if (total === num) {
        cnt += 1;
        break;
      } else if (total > num) {
        break;
      }
    }
  }
  return cnt;
}

console.log(solution(Number(input)));
