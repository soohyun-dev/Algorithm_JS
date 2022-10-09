const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
const space = input.map((v) => v.split(" ").map(Number));

function solution(T, space) {
  let arr = [];
  const check = (V) => {
    let [num, line, range] = [0, 0, 1];
    while (num < V) {
      [num, line] = [num + range, line + 1];
      if (num >= V) return line;
      [num, line, range] = [num + range, line + 1, range + 1];
    }
    return line;
  };
  space.map((v) => {
    let [a, b] = v.map(Number);
    let tmp = b - a;
    arr.push(check(tmp));
  });
  arr.map((v) => console.log(v));
}
solution(T, space);

// 1  1
// 2  1 1
// 3  1 1 1
// 4  1 2 1
// 5  1 2 1 1
// 6  1 2 2 1
// 7  1 2 2 1 1
// 8  1 2 2 2 1
// 9  1 2 3 2 1
// 10 1 2 3 2 1 1
// 11 1 2 3 2 2 1
// 12 1 2 3 3 2 1
// 13 1 2 3 3 2 1 1
// 14 1 2 3 3 2 2 1
// 15 1 2 3 3 3 2 1
// 16 1 2 3 4 3 2 1
