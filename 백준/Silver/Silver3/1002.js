const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_T = Number(input[0]);
input.shift();
const input_Test = input.map((v) => v.split(" ").map(Number));

function solution(T, Test) {
  const makeResult = (Info) => {
    const [x1, y1, r1, x2, y2, r2] = Info;
    const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    if (dist === 0) return r1 === r2 ? -1 : 0;
    if (r1 + r2 === dist || Math.abs(r2 - r1) === dist) return 1;
    else if (r1 + r2 > dist && Math.abs(r1 - r2) < dist) return 2;
    return 0;
  };

  Test.forEach((info) => {
    console.log(makeResult(info));
  });
}

solution(input_T, input_Test);
