const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const T = Number(input);

dq = [T];
for (let i = T - 1; i > 0; i--) {
  dq = [i, ...dq];
  for (let j = 0; j < i; j++) {
    let tmp = dq.splice(dq.length - 1, 1);
    dq = [...tmp, ...dq];
  }
}

console.log(dq.join(" "));

function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => a - b);
  let HIndex = citations[0];
  let T = citations.length;
  for (let i = 0; i < 1000; i++) {
    if (i > citations[T - 1]) break;
    for (let j = 0; j < T; j++) {
      if (citations[j] >= i && T - j >= i) HIndex = i;
    }
  }
  return HIndex;
}
