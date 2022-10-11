const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const S = input;

function solution(S) {
  let result = [];
  for (let i = 0; i < S.length; i++) {
    let tmp = S[i];
    result.push(tmp);
    for (let j = i + 1; j < S.length; j++) {
      tmp += S[j];
      result.push(tmp);
    }
  }
  result = new Set(result);
  return [...result].length;
}

console.log(solution(S));
