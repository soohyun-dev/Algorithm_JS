const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cnt = 0;

const cntNums = (num) => {
  let tmp = num;
  while (true) {
    let SUM = 0;
    for (let i = 0; i < tmp.length; i++) {
      SUM += Number(tmp[i]);
    }
    tmp = String(SUM);
    if (tmp.length === 1) {
      return tmp;
    }
  }
};

while (true) {
  if (input[cnt] == 0) {
    break;
  }
  console.log(cntNums(input[cnt]));
  cnt += 1;
}
