const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const ArrIndex = (A) => {
  cnt = 0;
  for (i of A) {
    checkIndex[i][checkIndex[i].length] = cnt;
    cnt += 1;
  }

  return;
};

const T = input.shift();

arr = input.shift().split(" ").map(Number);
checkIndex = [...new Array(1001)].map(() => []);

const tmp = arr.slice();
tmp.sort((a, b) => a - b);
ArrIndex(tmp);
answer = [];

arr.map((v) => {
  answer = [...answer, checkIndex[v][0]];
  checkIndex[v].splice(0, 1);
});

console.log(answer.join(" "));
