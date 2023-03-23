const input = require('fs').readFileSync('././index.txt').toString().trim();
const log = console.log;

function solution(N) {
  const divide = 123456789;
  const isPrimeNmbers = Array.from({ length: N + 1 }, () => true).fill(false, 0, 2);
  const primeNumbers = [];
  const dp = Array.from({ length: N + 1 }, () => 0);
  dp[0] = 1;

  for (let i = 2; i < N; i++) {
    for (let j = 2; j * i <= N; j++) {
      isPrimeNmbers[i * j] = false;
    }
  }

  isPrimeNmbers.forEach((v, idx) => {
    if (v) primeNumbers.push(idx);
  });

  for (let i = 0; i <= primeNumbers.length; i++) {
    for (let j = primeNumbers[i]; j <= N; j++) {
      dp[j] = (dp[j] + dp[j - primeNumbers[i]]) % divide;
      console.log(dp);
    }
  }

  return dp[N];
}

log(solution(+input));

/*

4
2+2

5 
2+3
5

6
2+2+2
3+3

7
2+2+3
2+5
7

8
2+2+2+2
2+3+3
3+5

9
2+2+2+3
3+3+3
2+2+5
2+7

*/
