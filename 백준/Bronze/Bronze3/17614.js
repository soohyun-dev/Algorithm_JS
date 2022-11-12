const input = require("fs").readFileSync("/dev/stdin").toString();

function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    const num = String(i);
    num.split("").forEach((v) => {
      if (v === "3" || v === "6" || v === "9") cnt += 1;
    });
  }

  return cnt;
}

console.log(solution(Number(input)));
