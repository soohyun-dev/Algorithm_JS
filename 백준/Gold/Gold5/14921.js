/**
 * 같은 양의 두 용액을 혼합하면, 그 특성값은 두 용액의 특성값의 합이 된다.
 *
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const log = console.log;

function solution(N, A) {
  let divPoint = -1;
  let result = Infinity;
  let pre = result;
  for (let i = 0; i < N; i++) {
    if (A[i] >= 0) {
      divPoint = i;
      break;
    }
  }

  if (divPoint === 0) {
    // 모두 양수일 때
    return A[0] + A[1];
  }

  if (divPoint > 0) {
    // 음수 끝에서 두개 초기값으로
    result = A[divPoint - 1] + A[divPoint - 2];
    if (N - divPoint >= 2) {
      // 양수 앞에서 두개 초기값으로
      result =
        Math.abs(A[divPoint - 1] + A[divPoint - 2]) < A[divPoint] + A[divPoint + 1]
          ? A[divPoint - 1] + A[divPoint - 2]
          : A[divPoint] + A[divPoint + 1];
    }
  }

  for (let i = 0; i < divPoint; i++) {
    for (let j = divPoint; j < N; j++) {
      if (Math.abs(A[i] + A[j]) < Math.abs(result)) {
        result = A[i] + A[j];
        pre = result;
      }
      if (pre < A[i] + A[j]) break;
    }
  }

  return result === Infinity ? A[A.length - 1] + A[A.length - 2] : result;
}

log(solution(Number(input[0].trim()), input[1].split(' ').map(Number)));

/**
 * 반례
 * 5
 * -1 -1 -1 -1 5 (중복 가능)
 *
 * 4
 * -500 1 1 1 1
 *
 */
