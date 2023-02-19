const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [inputN, ...inputStrs] = input.map((v) => v.trim());
const log = console.log;

function solution(N, Strs) {
  const makeResult = (idx, result, strs) => {
    if (strs[idx].charCodeAt([0]) <= strs[strs.length - (idx + 1)].charCodeAt([0])) {
      result += strs[0];
      strs = strs.splice(1);
    } else {
      result += strs.pop();
    }
    return [result, strs];
  };

  let Result = '';

  for (let i = 0; i < N; i++) {
    if (Strs[0].charCodeAt([0]) === Strs[Strs.length - 1].charCodeAt([0])) {
      let j = 1;
      while (j <= ~~(Strs.length / 2)) {
        if (Strs[j].charCodeAt([0]) === Strs[Strs.length - (j + 1)].charCodeAt([0])) {
          j += 1;
        } else {
          [Result, Strs] = makeResult(j, Result, Strs);
          break;
        }
        // AAABAAA 반례 처리
        if (j >= ~~(Strs.length / 2)) {
          [Result, Strs] = makeResult(0, Result, Strs);
          break;
        }
      }
    } else {
      [Result, Strs] = makeResult(0, Result, Strs);
    }
  }

  Result += Strs[0];

  if (N > 80) {
    for (let i = 0; i < N; i += 80) {
      log(Result.slice(i, i + 80));
    }
  } else {
    log(Result);
  }
}

solution(+inputN, inputStrs);
