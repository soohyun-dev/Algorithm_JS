const input = require('fs').readFileSync('././index.txt').toString().trim().split('\n');

const [input_A, input_B] = input.map((v) => v.trim());

function solution(A, B) {
  const b = new RegExp(B);
  if (A.match(b)) return 1;
  return 0;
}

console.log(solution(input_A, input_B));
