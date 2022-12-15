const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(str) {
  let result = '';
  str.split('').forEach((v) => {
    num = v.charCodeAt() - 3;
    if (num < 65) num += 26;
    result += String.fromCharCode(num);
  });

  return result;
}

console.log(solution(input[0]));
