const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const [...input_tests] = input.map((v) => v.split(" ").map(Number));

function solution(tests) {
  const calculate = (stack, len, MAX) => {
    const [target, _] = stack.pop();
    let width = 0;
    if (stack.length === 0) width = len;
    else width = len - stack[stack.length - 1][1] - 1;
    MAX = Math.max(MAX, width * target);

    return [stack, MAX];
  };

  tests.forEach((test) => {
    const [N, ...blocks] = test;
    let stack = [];
    let MAX = 0;
    if (blocks.length !== 0) {
      blocks.forEach((block, idx) => {
        while (stack.length !== 0 && stack[stack.length - 1][0] > block) {
          [stack, MAX] = calculate(stack, idx, MAX);
        }
        stack.push([block, idx]);
      });
      console.log(stack);
      while (stack.length !== 0) {
        [stack, MAX] = calculate(stack, N, MAX);
      }
      console.log(MAX);
    }
  });
}

solution(input_tests);

/*

9 3 2 1 0 1 2 3 3 3 

0     000
00   0000
000 00000

*/
