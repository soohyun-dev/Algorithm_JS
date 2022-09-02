const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cnt = 0;

const cntSquare = (num) => {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i * i;
  }
  return total;
};

while (true) {
  if (parseInt(input[cnt]) == 0) {
    break;
  }
  console.log(cntSquare(input[cnt]));
  cnt += 1;
}

// 1 : 1
// 2 : 5  4+1
// 3: 14  9+4+1
// 4: 16+9+4+1
