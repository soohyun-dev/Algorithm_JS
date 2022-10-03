const MIN = (a, b) => {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    if (a % i === 0 && b % i === 0) result = i;
  }
  return result;
};

const MAX = (a, b) => {
  let reuslt = b;
  let tmp = b;
  while (true) {
    if (b % a === 0) {
      result = b;
      break;
    } else b += tmp;
  }
  return result;
};

function solution(n, m) {
  var answer = [];
  const [A, B] = [Math.min(n, m), Math.max(n, m)];
  answer.push(MIN(A, B));
  answer.push(MAX(A, B));

  return answer;
}
