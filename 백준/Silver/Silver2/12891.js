const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const [S, P] = input.shift().map(Number);
const DNA = input[0].toString();
const [A, C, G, T] = input[1].map(Number);

function solution(S, P, DNA, A, C, G, T) {
  const check = () => {
    if (dict["A"] >= A && dict["C"] >= C && dict["G"] >= G && dict["T"] >= T)
      return true;
    else return false;
  };

  const dict = {};
  [dict["A"], dict["C"], dict["G"], dict["T"]] = [0, 0, 0, 0];
  let cnt = 0;
  for (let i = 0; i < P; i++) dict[DNA[i]] += 1;
  cnt = check() === true ? cnt + 1 : cnt;
  for (let j = 0; j < S - P; j++) {
    dict[DNA[j]] -= 1;
    dict[DNA[P + j]] += 1;
    cnt = check() === true ? cnt + 1 : cnt;
  }
  return cnt;
}

console.log(solution(S, P, DNA, A, C, G, T));
